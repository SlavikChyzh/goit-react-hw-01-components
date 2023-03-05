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

export const Profile = ({ user }) => (
    <ProfileDiv className="profile">
      <div className="description">
        <ProfileAvatar
          src={user.avatar}
          alt="user avatar"
          className="avatar"
        />
        <ProfileName className="name">{ user.username}</ProfileName>
        <ProfileTag className="tag">{ user.tag}</ProfileTag>
        <ProfileLocation className="location">{ user.location}</ProfileLocation>
      </div>
      <ProfileStatusList className="stats">
        <ProfileStatusItem>
          <span className="label">Followers</span>
          <span className="quantity">{ user.stats.followers}</span>
        </ProfileStatusItem>
        <ProfileStatusItem>
          <span className="label">Views</span>
          <span className="quantity">{ user.stats.views}</span>
        </ProfileStatusItem>
        <ProfileStatusItem>
          <span className="label">Likes</span>
          <span className="quantity">{ user.stats.likes}</span>
        </ProfileStatusItem>
      </ProfileStatusList>
    </ProfileDiv>
);
  
Profile.propTypes = {
  user: PropTypes.shape ({
    username: PropTypes.string.isRequired,
    tags: PropTypes.string,
    avatar: PropTypes.string.isRequired,
    location: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number)
  })
}