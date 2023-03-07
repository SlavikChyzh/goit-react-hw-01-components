import PropTypes from 'prop-types';
import { FriendsListItem } from "components/FriendListItem/FriendListItem";
import { FriendsListTeg } from './FriendList.styled'

export const FriendsList = ({ friendsList }) => (
  <FriendsListTeg className="friend-list">
    {friendsList.map(({avatar,name,isOnline,id}) => <FriendsListItem avatar={avatar} name={name} online={isOnline} key={id} />)}
  </FriendsListTeg>
)

FriendsList.propTypes = {
  friendsList: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      online: PropTypes.bool.isRequired
    }
  ))
}