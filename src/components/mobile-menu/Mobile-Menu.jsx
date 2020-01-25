import React from "react";
import { Burger } from "./styles";

export const MobileMenu = props => {
  return (
    <Burger onClick={() => props.onClick()} open={props.open}>
      <div></div>
      <div></div>
      <div></div>
    </Burger>
  );
};
