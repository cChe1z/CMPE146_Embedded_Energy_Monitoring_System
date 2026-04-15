import styles from './css/StatCard.module.css'

function StatCard({ label, value, color }) {
  return (
    <div
      className={styles.card}
      style={{ borderTop: `3px solid ${color}` }}
    >
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{value}</p>
    </div>
  )
}

export default StatCard
