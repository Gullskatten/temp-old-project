import React from 'react';
import styled from 'styled-components';

 const LoadingText = styled.span`
    color: #eee;
 `;
 const ImageLoader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
 `;

const ImagePlaceholder = () => {
    return (
        <ImageLoader>
            <LoadingText>Laster..</LoadingText>
        </ImageLoader>
    )
}

export default ImagePlaceholder;