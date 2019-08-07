import React from 'react';
import styled from "styled-components";
import Img from "react-image";
import ReactCSSTransitionReplace from "react-css-transition-replace";
import ImagePlaceholder from "./ImagePlaceholder";

const ImageWrapper = styled.div`
display: flex;
`;

const UserProfilePicture = ({ src, height, width }) => {
    return(
        <ImageWrapper>
        <Img
          style={{borderRadius: '5px'}}
          loader={<ImagePlaceholder />}
          src={src}
          width={width}
          height={height}
          container={children => {
            return (
              <ReactCSSTransitionReplace
                transitionEnterTimeout={6000}
                transitionLeaveTimeout={400}
                transitionName="fade-wait"
                changeWidth={true}
              >
                {children}
              </ReactCSSTransitionReplace>
            );
          }}
        />
      </ImageWrapper>
    )
}

export default UserProfilePicture;
