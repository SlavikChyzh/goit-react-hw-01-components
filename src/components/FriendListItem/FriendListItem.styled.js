import { getRoles } from '@testing-library/react';
import styled from 'styled-components';

const FriendItemTeg = styled.li`
  display: flex;
  align-items: center;
  background-color: grey;
  list-style: none;
  align-items: center;
  border: solid 2px orange;
  border-radius: 15px;
  margin-bottom: 10px;
  padding-left: 10px;
`;

const FriendItemOnlineSpan = styled.span`
  display: flex;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  width: 10px;
  height: 10px;
  border-radius: 5px;
`;

const FriendItemImg = styled.img`
  display: flex;
  margin: 0 20px;
`;

export { FriendItemImg, FriendItemTeg, FriendItemOnlineSpan };
