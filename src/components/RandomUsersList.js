import React from "react";
import UserListItem from './UserListItem';
import styled from 'styled-components';

const UsersList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    max-width: 600px;

    li:not(:first-child){
        margin: 0.5rem 0;
    }
`;


const RandomUsersList = ({ users, onUserSelected }) => {

    return (
      <UsersList>
        {users.map(user => (
          <UserListItem key={user.email} user={user} handleUserProfileClicked={() => onUserSelected(user)}/>
        ))}
      </UsersList>
    );
}

export default RandomUsersList;