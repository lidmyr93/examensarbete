import React from "react";
import { StyledLink } from "./styles";
export const ButtonLink = props => {
  const { text, linkTo, width, visible } = props;

  return (
    <StyledLink href={linkTo} width={width} visible={visible}>
      {text}
    </StyledLink>
  );
};
