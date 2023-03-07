import PropTypes from 'prop-types';
import { FriendsListItem } from "components/FriendListItem/FriendListItem";
import { FriendsListTeg } from './FriendList.styled'

export const FriendsList = ({ friendsList }) => (
  <FriendsListTeg className="friend-list">
    {friendsList.map(someFriend => <FriendsListItem avatar={someFriend.avatar} name={someFriend.name} online={someFriend.isOnline} key={someFriend.id} />)}
  </FriendsListTeg>
)

FriendsList.propTypes = {
  friendsList: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string,
      online: PropTypes.bool
    }
  ))
}