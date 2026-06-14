function Settings() {
  return (
    <section className="settings-page">
      <div className="page-header">
        <div>
          <p className="eyebrow">Settings</p>
          <h2>Personalize your experience</h2>
        </div>
      </div>

      <div className="settings-grid">
        <article className="settings-card">
          <h3>Security</h3>
          <p>Update your password, enable biometrics, and manage login devices.</p>
        </article>
        <article className="settings-card">
          <h3>Notifications</h3>
          <p>Control alerts for transactions, offers, and account updates.</p>
        </article>
        <article className="settings-card">
          <h3>Preferences</h3>
          <p>Set your dashboard theme, language, and default transfer limits.</p>
        </article>
      </div>
    </section>
  )
}

export default Settings
