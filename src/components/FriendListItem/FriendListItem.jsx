import PropTypes from 'prop-types';


export const FriendsListItem = ({ friend, online }) => (
  <li className="item">
    <span className="status">O</span>
    <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
    <p className="name">{friend.name}</p>
  </li>
)

FriendsListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number.isRequired
  }),
  online: PropTypes.bool
}