import React, { useState } from "react";
import { HeaderWrapper, StyledNav } from "./styles";
import { MobileMenu } from "../mobile-menu/Mobile-Menu";
import wrapperImage from "../../Images/metalwork.jpg";
import { NavLink, useLocation } from "react-router-dom";

export const Header = props => {
  const { content: navlinks } = props;
  const [open, setOpen] = useState(false);
  const currentSlug = useLocation().pathname;

  return (
    <HeaderWrapper background={wrapperImage} currentPage={currentSlug}>
      <MobileMenu
        onClick={() => {
          setOpen(!open);
        }}
        open={open}
      />
      <StyledNav open={open}>
        {Object.keys(navlinks).map((links, i) => (
          <span key={i} onClick={() => setOpen(!open)}>
            <NavLink
              activeStyle={{ color: "lightblue" }}
              to={`/${links === "home" ? "" : links}`}
            >
              {navlinks[links]}
            </NavLink>
          </span>
        ))}
      </StyledNav>
    </HeaderWrapper>
  );
};
