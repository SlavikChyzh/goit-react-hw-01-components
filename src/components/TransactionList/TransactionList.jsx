import PropTypes from 'prop-types';
import { Transaction } from "components/Transaction/Transaction";

export const TransactionList = ({ transactions }) => (
  <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(transaction => <Transaction transaction={transaction} key={transaction.id } />)}
    </tbody>
  
  
  </table>
)

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object)
}
