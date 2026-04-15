import StatCard from '../components/StatCard'
import styles from './css/DashboardPage.module.css'

function DashboardPage() {
  return (
    <div className={styles.page}>
      
      {/* ---- Header Row ---- */}
      <div className={styles.header}>
        <h1 className={styles.title}>Energy Dashboard</h1>
        <span className={styles.statusBadge}>
          <span className={styles.statusDot}>●</span>
          last packet - 2 sec ago
        </span>
      </div>

      {/* ---- Controls Row ---- */}
      <div className={styles.controlsRow}>
        <div className={styles.toggleGroup}>
          <button className={`${styles.toggleBtn} ${styles.toggleBtnActive}`}>Day</button>
          <button className={styles.toggleBtn}>Week</button>
          <button className={styles.toggleBtn}>Month</button>
        </div>
        <span className={styles.dateDisplay}>April 12, 2026</span>
      </div>

      {/* ---- Stat Cards Row ---- */}
      <div className={styles.cardRow}>
        <StatCard label="Power" value="847 W" color="#E74C6F" />
        <StatCard label="RMS Current" value="7.42 A" color="#02E6FF" />
        <StatCard label="Voltage" value="120 V" color="#B3CFE5" />
        <StatCard label="Today's Energy" value="12.4 kWh" color="#00FEA5" />
        <StatCard label="Est. Cost Today" value="$5.46" color="#FFA14E" />
      </div>

      {/* ---- Chart Section ---- */}
      <div className={styles.chartSection}>
        <h2 className={styles.chartTitle}>Power Usage • Last 24 Hours</h2>
        <p className={styles.chartSubtitle}>
          Peak 1,920 W at 6:47pm • Average 517 W
        </p>
        <div className={styles.chartPlaceholder}>
          Chart will go here (use Recharts or Chart.js)
        </div>
      </div>

      {/* ---- Bottom Grid: Cost + Highlights ---- */}
      <div className={styles.bottomGrid}>
        {/* Today's Cost Card */}
        <div className={styles.infoCard}>
          <h2 className={styles.infoCardTitle}>{"Today's Cost"}</h2>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Energy Used</span>
            <span className={styles.infoValue}>112.4 kWh</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Rate</span>
            <span className={styles.infoValue}>$0.16 / kWh</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Cost so far</span>
            {/* Base class for font styling + variant for green color */}
            <span className={`${styles.infoValue} ${styles.infoValueGreen}`}>$1.98</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Projected Today</span>
            <span className={styles.infoValue}>$3.20</span>
          </div>
        </div>

        {/* Today's Highlights Card */}
        <div className={styles.infoCard}>
          <h2 className={styles.infoCardTitle}>{"Today's Highlights"}</h2>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Peak Power</span>
            <span className={`${styles.infoValue} ${styles.infoValuePink}`}>1,920 W</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Peak Time</span>
            <span className={styles.infoValue}>6:47 PM</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Average Power</span>
            <span className={styles.infoValue}>517 W</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Vs yesterday</span>
            <span className={`${styles.infoValue} ${styles.infoValueOrange}`}>▲ 8.2%</span>
          </div>
        </div>
      </div>

      {/* ---- Status Bar ---- */}
      <div className={styles.statusBar}>
        <div className={styles.statusItem}>
          <span className={styles.statusItemLabel}>MCU status flag</span>
          <span className={`${styles.statusItemValue} ${styles.statusItemValueGreen}`}>0×00 OK</span>
        </div>
        <div className={styles.statusItem}>
          <span className={styles.statusItemLabel}>UART</span>
          <span className={`${styles.statusItemValue} ${styles.statusItemValueGreen}`}>Active</span>
        </div>
        <div className={styles.statusItem}>
          <span className={styles.statusItemLabel}>Sample rate</span>
          <span className={styles.statusItemValue}>1Hz</span>
        </div>
        <div className={styles.statusItem}>
          <span className={styles.statusItemLabel}>Packets Received</span>
          <span className={styles.statusItemValue}>86,341 Today</span>
        </div>
        <div className={styles.statusItem}>
          <span className={styles.statusItemLabel}>Dropped/Errors</span>
          <span className={styles.statusItemValue}>3</span>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
