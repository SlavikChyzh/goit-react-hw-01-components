import PropTypes from 'prop-types';
import { TransactionTD, TransactionName} from"./Transaction.styled"

export const Transaction = ({ 
  type,
  amount,
  currency }) => (
  <tr>
    <TransactionName className="type">{type}</TransactionName>
    <TransactionTD className="amount">{ amount}</TransactionTD>
    <TransactionTD className="currency">{currency}</TransactionTD>
  </tr>
)

Transaction.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string
}