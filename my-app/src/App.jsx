import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './pages/Dashboard'
import Accounts from './pages/Accounts'
import Payments from './pages/Payments'
import Settings from './pages/Settings'

const accountsData = [
  { id: 'a1', type: 'Checking', number: '••• 4291', balance: 8450.5, currency: 'USD', description: 'Everyday spending account' },
  { id: 'a2', type: 'Savings', number: '••• 8174', balance: 21930.12, currency: 'USD', description: 'Rainy day savings' },
  { id: 'a3', type: 'Credit', number: '••• 1283', balance: 1234.78, currency: 'USD', description: 'Rewards balance' },
]

const recentTransactions = [
  { id: 't1', title: 'Salary deposit', account: 'Checking', date: 'Jun 12', amount: '+$4,200.00' },
  { id: 't2', title: 'Grocery market', account: 'Checking', date: 'Jun 14', amount: '-$187.67' },
  { id: 't3', title: 'Utilities', account: 'Checking', date: 'Jun 13', amount: '-$95.22' },
  { id: 't4', title: 'Coffee shop', account: 'Checking', date: 'Jun 15', amount: '-$14.80' },
]

const payees = [
  { id: 'p1', initials: 'AB', name: 'Alex Brown', bank: 'First National', lastAmount: '420.00', status: 'Paid' },
  { id: 'p2', initials: 'MK', name: 'Mia Klein', bank: 'Union Bank', lastAmount: '1,150.00', status: 'Pending' },
  { id: 'p3', initials: 'TZ', name: 'Tanner Z.', bank: 'Coastal Credit', lastAmount: '320.00', status: 'Paid' },
  { id: 'p4', initials: 'LV', name: 'Lina V.', bank: 'Metro Trust', lastAmount: '85.50', status: 'Scheduled' },
]

function App() {
  const [view, setView] = useState('dashboard')

  return (
    <div className="app-shell">
      <Sidebar currentView={view} onNavigate={setView} />
      <div className="content-area">
        <Topbar currentView={view} />
        <main className="page-content">
          {view === 'dashboard' && <Dashboard accounts={accountsData} recentTransactions={recentTransactions} />}
          {view === 'accounts' && <Accounts accounts={accountsData} />}
          {view === 'payments' && <Payments payees={payees} />}
          {view === 'settings' && <Settings />}
        </main>
      </div>
    </div>
  )
}

export default App
