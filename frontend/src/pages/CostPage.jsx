/* CostPage.jsx */
import styles from './css/CostPage.module.css'

function Costpage(){
    return(
        <div className = {styles.pagename}>
            {/* Header */}
            <header className = {styles.header}>
                <h1 className = {styles.title}>Cost Overview</h1>
                {/* Status activity */}
                <div className = {styles.status}>
                    <span className = {styles.dot}>●</span>
                    <span className = {styles.statusinfo}>cost update - 7 seconds ago</span>
                </div>
            </header>
        <div className = {styles.freq}>
            <div className = {styles.decidefreq}>
                {/* Decide between daily, monthly and weekly*/}
                <button className = {styles.button}>Day</button>
                <button className = {`${styles.button} ${styles.selectedbutton}`}>Week</button>
                <button className = {styles.button}>Month</button>
            </div>
            {/* Show date */}
            <span className = {styles.date}>April 2026</span>
        </div>
        <div className = {styles.details}>
            {/* Show details*/}
            <div className = {styles.card}>
                <span className = {styles.label}>Total Weekly Cost</span>
                <span className = {styles.value}>$47.43</span>
            </div>
            <div className = {styles.card}>
                <span className = {styles.label}>Avg. Cost Per Day</span>
                <span className = {styles.value}>$6.78</span>
            </div>
            <div className = {styles.card}>
                <span className = {styles.label}>Cost Change</span>
                <div className = {styles.samerow}>
                    <span className = {styles.symbol}>↑</span>
                    <span className = {styles.value}>3.78%</span>
                </div>
            </div>
            <div className = {styles.card}>
                <span className = {styles.label}>Highest Usage Day</span>
                <span className = {styles.value}>Saturday</span>
            </div>
        </div>
        <div className = {styles.middle}>
            <div className = {styles.chart}>
                Use chart.js to put chart in this location
            </div>
            <div className = {styles.hardwaredetails}>
                {/* Show power factor, voltage and rate of cost*/}
                <div className = {styles.hardwarecard}>
                    <span className = {styles.hardwarelabel}>Power Factor</span>
                    <span className = {styles.hardwarevalue}>75%</span>
                </div>
                <div className = {styles.hardwarecard}>
                    <span className = {styles.hardwarelabel}>Voltage</span>
                    <span className = {styles.hardwarevalue}>~115 V</span>
                </div>
                <div className = {styles.hardwarecard}>
                    <span className = {styles.hardwarelabel}>Rate of Cost</span>
                    <span className = {styles.hardwarevalue}>$0.35 per kWh</span>
                </div>
            </div>
        </div>
        <div className = {styles.warning}>Important notice: Date from more than 
            7 days ago is automatically deleted
        </div>
        <div className = {styles.bottom}>
            <div className = {styles.item}>
                <span className = {styles.bottomlabel}>MCU Status Flag</span>
                <span className = {styles.bottomvalue}>0x00</span>
            </div>
            <div className = {styles.item}>
                <span className = {styles.bottomlabel}>UART</span>
                <div className = {styles.samerow}>
                <span className = {styles.statusdot}>●</span>
                <span className = {styles.bottomvalue}>Active</span>
                </div>
            </div>
             <div className = {styles.item}>
                <span className = {styles.bottomlabel}>Sampling Rate</span>
                <span className = {styles.bottomvalue}>1 Hz</span>
            </div>
             <div className = {styles.item}>
                <span className = {styles.bottomlabel}>Baud Rate</span>
                <span className = {styles.bottomvalue}>115,200</span>
            </div>
             <div className = {styles.item}>
                <span className = {styles.bottomlabel}># of Packets</span>
                <span className = {styles.bottomvalue}>604,387</span>
            </div>
        </div>
        </div>
    )
}

export default Costpage