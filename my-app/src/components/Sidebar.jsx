function Sidebar({ currentView, onNavigate }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'accounts', label: 'Accounts' },
    { id: 'payments', label: 'Payments' },
    { id: 'settings', label: 'Settings' },
  ]

  return (
    <aside className="sidebar">
      <div className="brand-block">
        <div className="brand-mark">B</div>
        <div>
          <p className="brand-label">Bankio</p>
          <small>Modern finance</small>
        </div>
      </div>

      <nav>
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={item.id === currentView ? 'nav-button active' : 'nav-button'}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="sidebar-help">
        <p>Need help?</p>
        <small>Contact support 24/7 or view FAQ.</small>
      </div>
    </aside>
  )
}

export default Sidebar
