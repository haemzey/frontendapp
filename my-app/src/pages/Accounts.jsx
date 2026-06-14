function Accounts({ accounts }) {
  return (
    <section className="accounts-page">
      <div className="page-header">
        <div>
          <p className="eyebrow">Accounts</p>
          <h2>Your banking portfolio</h2>
        </div>
        <button className="primary-button">Add account</button>
      </div>

      <div className="accounts-grid">
        {accounts.map((account) => (
          <article key={account.id} className="account-card">
            <div className="account-top">
              <span>{account.type}</span>
              <p>{account.number}</p>
            </div>
            <div className="account-balance">
              <strong>${account.balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
              <span>{account.currency}</span>
            </div>
            <p className="account-description">{account.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Accounts
