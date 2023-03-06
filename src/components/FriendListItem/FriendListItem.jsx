import PropTypes from 'prop-types';
import { FriendItemImg,FriendItemTeg, FriendItemOnlineSpan } from './FriendListItem.styled';

export const FriendsListItem = ({ friend, online }) => (
  <FriendItemTeg className="item">
    < FriendItemOnlineSpan className="status" isOnline={ online }> </ FriendItemOnlineSpan>
    <FriendItemImg className="avatar" src={friend.avatar} alt="User avatar" width="48" />
    <p className="name">{friend.name}</p>
  </FriendItemTeg>
)

FriendsListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number.isRequired
  }),
  online: PropTypes.bool
}