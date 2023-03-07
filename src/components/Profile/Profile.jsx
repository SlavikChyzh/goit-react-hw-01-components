import PropTypes from 'prop-types';

import {
  ProfileStatusList,
  ProfileDiv,
  ProfileAvatar,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileStatusItem
} from './Profile.styled';

export const Profile = ({ userName,tag,location,avatar,stats}) => (
  <ProfileDiv className="profile">
    <div className="description">
      <ProfileAvatar
        src={avatar}
        alt="user avatar"
        className="avatar"
      />
      <ProfileName className="name">{ userName}</ProfileName>
      <ProfileTag className="tag">@{ tag}</ProfileTag>
      <ProfileLocation className="location">{location}</ProfileLocation>
    </div>
    <ProfileStatusList className="stats">
      <ProfileStatusItem>
        <span className="label">Followers</span>
        <span className="quantity">{ stats.followers}</span>
      </ProfileStatusItem>
      <ProfileStatusItem>
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </ProfileStatusItem>
      <ProfileStatusItem>
        <span className="label">Likes</span>
        <span className="quantity">{ stats.likes}</span>
      </ProfileStatusItem>
    </ProfileStatusList>
  </ProfileDiv>
);
  
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
}