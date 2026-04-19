/* EnergyUsagePage.jsx */
import styles from './css/EnergyUsage.module.css'

function EnergyUsagePage() {
  return(
     <div className = {styles.page}>
        <header className = {styles.header}>
          <h1 className = {styles.title}>Energy Usage</h1>
            <div className = {styles.status}>
              <span className = {styles.dot}>●</span>
              <span className = {styles.statusinfo}>Energy usage updated 15 seconds ago</span>
            </div>
        </header>
        <div className = {styles.summary}>
          <div className = {styles.decision}>
          <button className = {styles.button}>Day</button>
          <button className = {styles.button}>Week</button>
          <button className = {`${styles.button} ${styles.selectedbutton}`}>Month</button>
          </div>
          <span className = {styles.date}>April 17, 2026</span>
        </div>
     </div>
  )
}
export default EnergyUsagePage