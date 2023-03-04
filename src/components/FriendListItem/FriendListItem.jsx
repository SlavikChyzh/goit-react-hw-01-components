export const FriendsListItem = ({friend, online}) => (
  <li className="item">
    <span className="status">O</span>
    <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
    <p className="name">{friend.name}</p>
  </li>
)