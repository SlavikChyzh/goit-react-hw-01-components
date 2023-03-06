import PropTypes from 'prop-types';
import { TransactionTD, TransactionName} from"./Transaction.styled"

export const Transaction = ({ transaction }) => (
  <tr>
    <TransactionName className="type">{transaction.type}</TransactionName>
    <TransactionTD className="amount">{ transaction.amount}</TransactionTD>
    <TransactionTD className="currency">{ transaction.currency}</TransactionTD>
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