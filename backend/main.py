from fastapi import FastAPI 
from fastapi.middleware.cors import CORSMiddleware # Turns off restrictions that occur when webpages interact with servers from different ports
import random, time # Random used for simulating packets, time used for timestamps

app = FastAPI() # Creates web server (program that sits and waits for requests, then sends back responses)

app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"]) # Allows the frontend to talk to backend

def sample():
    current = round(random.uniform(3.0, 15.0), 2)
    power = round(120 * current * 0.75, 1)
    return {"timestamp": int(time.time()), "current_a": current, "power_w": power, "status": "0x00"}
# Fake MCU packet generator
# Picks a random current, calculates power using P = V*I*PF, and adds a timestamp and status flag

@app.get("/live")
def live():
    return sample()
# First line means "when someone visits /live, run this function"
# Returns a packet
# Frontend calls this every 10 seconds for the live cards at the top of the dashboard

@app.get("/data/day")
def day():
    return [sample() for _ in range(24)]
# Returns a line of 24 samples for every hour of the day
# The for _ in range(24) means "do this 24 times"

@app.get("/data/week")
def week():
    return [sample() for _ in range(7)]
# Works the same as the /day one except with 7 samples

@app.get("/data/month")
def month():
    return [sample() for _ in range(30)]
# Works the same as the /day one except with 30 samples

@app.get("/cost")
def cost():
    kwh = round(random.uniform(8.0, 15.0), 2)
    return {"rate": 0.16, "energy_kwh": kwh, "cost": round(kwh * 0.16, 2)}
# Returns the energy used in kWh, the rate, and the total cost
# The cost page on the dashboard pulls from this

# The URL http://localhost:8000/docs shows an interactive documentation page 
# for our API that is automatically created with FastAPI. It lists every 
# endpoint (live, day, week, etc). You can click every one and hit a "Try it out"
# buton to call it in the browser. It shows exactly what the response is. 
# Essentially a visual way to show the backend. 