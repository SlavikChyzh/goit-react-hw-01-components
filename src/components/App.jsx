import { Profile } from "./Profile/Profile";
import user from '../data/user'
import { Statistics } from "./Statistics/Statistics";
import statisticData from "../data/statistic";
import { FriendsList } from "./FriendList/FriendList";
import friends from "../data/friends"
import { TransactionList } from "./TransactionList/TransactionList";
import transactions from "../data/transactions"


export const App = () => {
  return (
  <>
    <h1
    style={{
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </h1>

      <h3>Task 1</h3>
      <Profile user={user} />
      <h3>Task 2</h3>
      <Statistics statisticsData={statisticData}/>

      <h3>Task 3</h3>
      <FriendsList friendsList={friends} />
      <h3>Task 4</h3>  
      <TransactionList transactions={ transactions} />

    </>
  );
};
