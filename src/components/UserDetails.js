import React from "react";
import styled from "styled-components";
import { StyledTitleLarge } from "../styleguides/StyledTitle";
import UserProfilePicture from "./UserProfilePicture";
import { Tooltip } from "react-tippy";

const UserDetailWrapper = styled.div`
  border: 1px solid #fff;
  border-radius: 5px;
  position: relative;
`;

const AbsoluteCenteredDiv = styled.div`
  border: 2px solid red;
  position: absolute;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
`;

const UserDetails = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <UserDetailWrapper>
      {user.userData !== undefined &&
        user.userData.analysis.objects.map(object => {
          return (
            <Tooltip title={object.label} position="bottom" key={object.confidence}>
              <AbsoluteCenteredDiv
                width={object.box.w}
                height={object.box.h}
                top={object.box.y}
                left={object.box.x}
              />
            </Tooltip>
          );
        })}
        {user.userData !== undefined &&
        user.userData.analysis.face_encodings.encodings.map(object => {
          return (
            <Tooltip title={object.profile_uuid} position="bottom" key={object.uuid}>
              <AbsoluteCenteredDiv
                width={object.box.w}
                height={object.box.h}
                top={object.box.y}
                left={object.box.x}
              />
            </Tooltip>
          );
        })}
      <UserProfilePicture src={user.picture.large} width={128} height={128} />
      <StyledTitleLarge>
        {`${user.name.first} ${user.name.last}`}
      </StyledTitleLarge>
    </UserDetailWrapper>
  );
};

export default UserDetails;
