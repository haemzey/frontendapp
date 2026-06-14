function Dashboard({ accounts, recentTransactions }) {
  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0)

  return (
    <section className="dashboard-page">
      <div className="summary-grid">
        <article className="summary-card">
          <span>Total balance</span>
          <strong>${totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
        </article>
        <article className="summary-card">
          <span>Open accounts</span>
          <strong>{accounts.length}</strong>
        </article>
        <article className="summary-card">
          <span>Monthly goals</span>
          <strong>92%</strong>
        </article>
      </div>

      <section className="recent-section">
        <div className="section-header">
          <div>
            <p className="eyebrow">Cash flow</p>
            <h2>Recent transactions</h2>
          </div>
          <span className="pill positive">+$3,150</span>
        </div>

        <div className="transaction-list">
          {recentTransactions.map((transaction) => (
            <div key={transaction.id} className="transaction-item">
              <div>
                <p className="transaction-title">{transaction.title}</p>
                <p className="transaction-meta">{transaction.account} • {transaction.date}</p>
              </div>
              <strong className={transaction.amount.startsWith('-') ? 'negative' : 'positive'}>
                {transaction.amount}
              </strong>
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}

export default Dashboard
