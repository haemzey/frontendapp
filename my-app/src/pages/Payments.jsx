function Payments({ payees }) {
  return (
    <section className="payments-page">
      <div className="page-header">
        <div>
          <p className="eyebrow">Payments</p>
          <h2>Send money quickly</h2>
        </div>
        <button className="secondary-button">Schedule payment</button>
      </div>

      <div className="payees-grid">
        {payees.map((payee) => (
          <article key={payee.id} className="payee-card">
            <div className="payee-id">
              <span>{payee.initials}</span>
              <div>
                <p>{payee.name}</p>
                <small>{payee.bank}</small>
              </div>
            </div>
            <div className="payee-amount">
              <strong>${payee.lastAmount}</strong>
              <small>{payee.status}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Payments
