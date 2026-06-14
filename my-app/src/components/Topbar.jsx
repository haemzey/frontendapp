function Topbar({ currentView }) {
  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">Welcome back</p>
        <h1>{currentView === 'dashboard' ? 'Dashboard overview' : currentView === 'accounts' ? 'Your accounts' : currentView === 'payments' ? 'Payments center' : 'App settings'}</h1>
      </div>
      <div className="profile-chip">
        <span>JS</span>
        <div>
          <p>Jane Smith</p>
          <small>Premium member</small>
        </div>
      </div>
    </header>
  )
}

export default Topbar
