import { useState } from 'react'
import Sidebar from './components/Sidebar'
import DashboardPage from './pages/DashboardPage'
import CostPage from './pages/CostPage'
import EnergyUsagePage from './pages/EnergyUsagePage'
import './App.css'

function App() {
  const [page, setPage] = useState('Dashboard')

  function renderPage() {
    if (page === 'Dashboard') return <DashboardPage />
    if (page === 'Cost') return <CostPage />
    if (page === 'EnergyUsage') return <EnergyUsagePage />
    return <DashboardPage />  // fallback
  }

  return (
    <div className="appLayout">
      <Sidebar activePage={page} onPageChange={setPage} />
      {renderPage()}
    </div>
  )
}

export default App
