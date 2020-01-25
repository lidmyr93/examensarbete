import React, { useState } from "react";
import { HeaderWrapper, StyledLink, StyledNav } from "./styles";
import { MobileMenu } from "../mobile-menu/Mobile-Menu";
import { getSlug } from "../../Utils/url";

export const Header = props => {
  const { content: navlinks } = props;
  const [open, setOpen] = useState(false);
  const currentSlug = getSlug();

  return (
    <HeaderWrapper>
      <MobileMenu
        onClick={() => {
          setOpen(!open);
        }}
        open={open}
      />
      <StyledNav open={open}>
        {Object.keys(navlinks).map((links, i) => (
          <span key={i}>
            <StyledLink
              active={currentSlug === links ? true : false}
              href={`/${links}`}
            >
              {navlinks[links]}
            </StyledLink>
          </span>
        ))}
      </StyledNav>
    </HeaderWrapper>
  );
};
