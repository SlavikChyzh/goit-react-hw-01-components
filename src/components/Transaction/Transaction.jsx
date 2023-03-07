import PropTypes from 'prop-types';
import { TransactionListTable,TransactionListHeader,TransactionTD, TransactionName } from "./Transaction.styled";

export const TransactionList = ({ transactions }) => (
  <TransactionListTable className="transaction-history">
    <TransactionListHeader>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </TransactionListHeader>
    <tbody>
      {transactions.map(({type,amount,currency}) => (
        <tr>
          <TransactionName className="type">{type}</TransactionName>
          <TransactionTD className="amount">{amount}</TransactionTD>
          <TransactionTD className="currency">{currency}</TransactionTD>
        </tr>)
      )}
    </tbody>
  </TransactionListTable>
)

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string
  }))
}
