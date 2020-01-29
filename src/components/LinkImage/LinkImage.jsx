import React from "react";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { StyledLinkImage } from "./styles";
export const LinkImage = props => {
  const { text, link, image, alt, imageHidden, buttonHidden } = props;
  return (
    <StyledLinkImage visible={imageHidden}>
      <ButtonLink
        text={text}
        linkTo={link}
        width="300px"
        visible={buttonHidden}
      />
      <img src={image} alt={alt} />
    </StyledLinkImage>
  );
};
