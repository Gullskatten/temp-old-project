import React, { Component } from "react";
import RandomUserList from "./RandomUsersList";
import UserDetails from "./UserDetails";
import randomUserApi from "../utils/randomUserApi";
import styled from "styled-components";

const UsersWrapper = styled.div`
  display: flex;
  margin: 1rem;
`;

const UserDetailWrapper = styled.div`
  margin: 0 1rem;
`;

class Users extends Component {
  state = {
    users: [],
    selectedUser: undefined,
    userData: undefined,
    isLoading: false,
  };

  // Since we're doing async calls in componentDidMount, we don't want to update state if unmounted.
  componentWillUnmount = () => {
    this.isUnmounted = true;
  };

  componentDidMount = () => {
    this.fetchUsers();
  };

  fetchUsers = async (page = 1) => {
    const response = await randomUserApi.getUsersByPage(page);

    if (!this.isUnmounted && response.isOk) {
      this.setState({
        users: response.data
      });
    }
  };

  postSelectedUser = async () => {
    const { selectedUser } = this.state;

    this.setState({
      isLoading: true
    });

    const response = await fetch(
      `http://192.168.0.109:5000/images/upload?url=${encodeURIComponent(
        selectedUser.picture.large
      )}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    );

    if (response.ok) {

      if (!this.isUnmounted) {
        const data = await response.json();
        selectedUser.userData = data;

        this.setState({
          selectedUser,
          isLoading: false
        });
      }
    } else {
      if (!this.isUnmounted) {
        this.setState({
          isLoading: false
        });
      }
    }
  };

  handleUserSelected = user => {
    this.setState(
      {
        selectedUser: user
      },
      () => {
        this.postSelectedUser();
      }
    );
  };

  render() {
    const { users, selectedUser, isLoading } = this.state;
    return (
      <UsersWrapper>
        <RandomUserList
          onUserSelected={user => this.handleUserSelected(user)}
          users={users}
        />
        <UserDetailWrapper>
          <UserDetails user={selectedUser} />
        </UserDetailWrapper>
        { isLoading && (<span>Uploading user..</span>)}
      </UsersWrapper>
    );
  }
}

export default Users;
