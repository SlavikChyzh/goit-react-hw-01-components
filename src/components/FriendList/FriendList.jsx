import { FriendsListItem } from "components/FriendListItem/FriendListItem";

export const FriendsList = ({ friendsList }) => (
  <ul className="friend-list">
    {friendsList.map(someFriend => <FriendsListItem friend={someFriend} online={someFriend.isOnline} key={someFriend.id} />)}
  </ul>
)