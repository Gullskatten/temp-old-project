import React from "react";
import { StyledTitleMedium } from "../styleguides/StyledTitle";
import styled from "styled-components";
import UserProfilePicture from './UserProfilePicture';

const ItemWrapper = styled.li`
  display: flex;
  cursor: pointer;
`;

const UserInformation = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 1rem;
  width: 100%;
`;

const Email = styled.p`
  color: #fff;
  margin: 0;
`;


const UserListItem = ({ user, handleUserProfileClicked }) => {
  return (
    <ItemWrapper onClick={() => handleUserProfileClicked()}>
      <UserProfilePicture src={user.picture.medium} height={100} width={100} />
      <UserInformation>
        <StyledTitleMedium>{`${user.name.first} ${
          user.name.last
        }`}</StyledTitleMedium>
        <Email>{user.email}</Email>
      </UserInformation>
    </ItemWrapper>
  );
};

export default UserListItem;
