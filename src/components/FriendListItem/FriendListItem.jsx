import PropTypes from 'prop-types';
import { FriendItemImg,FriendItemTeg, FriendItemOnlineSpan } from './FriendListItem.styled';

export const FriendsListItem = ({ avatar,name, online }) => (
  <FriendItemTeg className="item">
    < FriendItemOnlineSpan className="status" isOnline={ online }> </ FriendItemOnlineSpan>
    <FriendItemImg className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </FriendItemTeg>
)

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  online: PropTypes.bool
}