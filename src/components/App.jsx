import { Profile } from "./Profile/Profile";
import user from '../data/user'
import { Statistics } from "./Statistics/Statistics";
import statisticData from "../data/statistic";
import { FriendsList } from "./FriendList/FriendList";
import friends from "../data/friends"
import { TransactionList } from "./Transaction/Transaction";
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
      <Profile
        userName={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
    <h3>Task 2</h3>
      <Statistics statisticsData={statisticData} />
      <Statistics statisticsData={statisticData} title='Upload' />
    <h3>Task 3</h3>
      <FriendsList friendsList={friends} />
    <h3>Task 4</h3>  
      <TransactionList transactions={ transactions} />
    </>
  );
};
