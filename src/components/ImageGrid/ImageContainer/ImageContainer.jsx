import React from "react";
import styled from "styled-components";

export const ImageContainer = props => {
  const handleClick = e => {
    props.onClick(e.target.currentSrc);
  };
  return (
    <ImageWrapper onClick={e => handleClick(e)}>
      <img srcSet={props.src} alt="work" />
    </ImageWrapper>
  );
};

export const ImageWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 20%;
    height: auto;
    display: flex;
  }
  img {
    height: auto;
    width: 100%;
  }
`;
