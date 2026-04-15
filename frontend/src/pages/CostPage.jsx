import styles from './css/CostPage.module.css'

function Costpage(){
    return(
    // Header at top
    <div className = {styles.page}>
        <div className = {styles.header}>
            <h1 className = {styles.title}>Cost Overview</h1>
            <span className = {styles.statusDot}>●</span>
            cost update - 7 sec ago
        </div>
    // Control buttons to toggle between day, week and month
    <div className = {styles.controls}>
        <div className = {styles.toggleGroup}>
            <button className = {`${styles.toggleBtn} ${styles.toggleBtnActive}`}>Day</button>
            <button className = {styles.toggleBtn}>Week</button>
            <button className = {styles.toggleBtn}>Month</button>
        </div>
        <span className = {styles.dateDisplay}>April 15, 2026</span>
    </div>
    // Top information
        <div 
            className = {styles.card}>
            <h2>Total Weekly Cost</h2>
            <p>$47.43</p>
        </div>
        <div className = {styles.card}>
            <h3>Avg. Cost Per Day</h3>
            <p>$6.78</p>
        </div>
        <div
            className = {styles.card}>
            <h4>Cost Change</h4>
            <p>3.78% increase</p>
        </div>
        <div
            className = {styles.card}>
            <h5>Highest Usage Day</h5>
            <p>Saturday</p>
        </div>
    </div>
        // Chart section
    )
}

export default Costpage