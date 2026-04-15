import styles from './css/Sidebar.module.css'

const navItems = [
  { id: 'Dashboard', label: 'Dashboard', icon: '▦' },
  { id: 'Cost', label: 'Cost', icon: '$' },
  { id: 'EnergyUsage', label: 'Energy Usage', icon: '⚡' },
]

function Sidebar({ activePage, onPageChange }) {
  return (
    <aside className={styles.sidebar}>
      
      <nav className={styles.nav}>
        {navItems.map((item) => {
          const isActive = item.id === activePage
          
          return (
            <button
              key={item.id}
              className={isActive ? `${styles.navItem} ${styles.navItemActive}` : styles.navItem}
              onClick={() => onPageChange(item.id)}
            >
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.label}>{item.label}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar
