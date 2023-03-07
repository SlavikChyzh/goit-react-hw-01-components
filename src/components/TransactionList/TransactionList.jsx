import PropTypes from 'prop-types';
import { Transaction } from "components/Transaction/Transaction";
import { TransactionListTable,TransactionListHeader } from "./TransactionList.styled";

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
      {transactions.map(transaction => <Transaction
        type={transaction.type}
        amount={transaction.amount}
        currency={transaction.currency}
        key={transaction.id} />)
      }
    </tbody>
  </TransactionListTable>
)

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object)
}
