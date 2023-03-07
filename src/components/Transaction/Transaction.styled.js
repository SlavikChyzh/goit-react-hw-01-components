import styled from 'styled-components';

const TransactionListTable = styled.table`
  width: 600px;
  margin: 0 auto;
  background-color: grey;
  border-radius: 20px;
  border: solid 2px orange;
  padding-bottom: 20px;
`;
const TransactionListHeader = styled.thead`
  height: 50px;
  border-bottom: solid px orange;
`;

const TransactionName = styled.td`
  padding-left: 40px;
`;

const TransactionTD = styled.td`
  text-align: center;
`;

export {
  TransactionListTable,
  TransactionListHeader,
  TransactionTD,
  TransactionName,
};
