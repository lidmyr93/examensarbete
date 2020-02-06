import React, { useState } from "react";
import styled from "styled-components";

export const ImageContainer = props => {
  const [open, setOpen] = useState(false);
  const handleClick = e => {
    props.onClick(e.target.currentSrc);
  };
  return (
    <ImageWrapper onClick={e => handleClick(e)}>
      <img srcSet={props.src} />
    </ImageWrapper>
  );
};

export const ImageWrapper = styled.div`
  position: ${props => (props.open ? "absolute" : "initial")};

  z-index: ${props => (props.open ? "15" : "0")};
  height: ${props => (props.open ? "100vh" : "initial")};
  background: ${props => (props.open ? "black" : "transparent")};
  img {
  }
  @media screen and (min-width: 768px) {
    width: auto;
    height: auto;
    margin: 0 2px 0 2px;
  }
`;
