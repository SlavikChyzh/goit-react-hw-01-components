export const Transaction = ({ transaction }) => (
  <tr>
    <td className="type">{transaction.type}</td>
    <td className="amount">{ transaction.amount}</td>
    <td className="currency">{ transaction.currency}</td>
  </tr>
)
