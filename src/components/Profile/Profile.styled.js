import styled from 'styled-components';

const ProfileDiv = styled.div`
  display: block;
  background-color: gray;
  width: 300px;
  margin: 0 auto;
  border-radius: 20px;
`;

const ProfileAvatar = styled.img`
  width: auto;
  max-width: 200px;
  height: auto;
  max-height: 200px;
  display: flex;
  margin: 0 auto;
  padding-top: 20px;
`;

const ProfileName = styled.p`
  display: flex;
  color: black;
  font-size: 20px;
  justify-content: center;
  font-style: italic;
  padding-top: 20px;
`;

const ProfileTag = styled.p`
  display: flex;
  color: blue;
  font-size: 14px;
  justify-content: center;
`;

const ProfileLocation = styled.p`
  display: flex;
  color: blanchedalmond;
  font-size: 14px;
  justify-content: center;
`;

const ProfileStatusList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-left: 0;
`;

const ProfileStatusItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0 5px;
  align-items: center;
  margin-bottom: 15px;
`;

export {
  ProfileStatusList,
  ProfileDiv,
  ProfileAvatar,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileStatusItem,
};
