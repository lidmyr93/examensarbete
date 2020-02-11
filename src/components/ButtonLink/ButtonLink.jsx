import React from "react";
import { StyledLink } from "./styles";
export const ButtonLink = props => {
  const { text, linkTo, width, visible, borderRadius } = props;

  return (
    <StyledLink
      href={linkTo}
      width={width}
      visible={visible}
      borderRadius={borderRadius}
    >
      {text}
    </StyledLink>
  );
};
