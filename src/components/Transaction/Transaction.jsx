import PropTypes from 'prop-types';

export const Transaction = ({ transaction }) => (
  <tr>
    <td className="type">{transaction.type}</td>
    <td className="amount">{ transaction.amount}</td>
    <td className="currency">{ transaction.currency}</td>
  </tr>
)

Transaction.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string
  })
}