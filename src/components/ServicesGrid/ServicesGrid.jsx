import React from "react";
import { FaBeer } from "react-icons/fa";
import { GridLayout, IconTextAlign, IconContainer } from "./styles";
import { useLocation } from "react-router-dom";
export const ServicesGrid = props => {
  const { content, gridGap } = props;
  const currentSlug = useLocation().pathname;

  return (
    <GridLayout
      columns={currentSlug === "/services" ? "100%" : "50% 50%"}
      gridGap={gridGap}
      height={currentSlug === "/services" ? "70vh" : "60%"}
    >
      {content.map((icon, i) => (
        <IconContainer key={i}>
          <IconTextAlign
            key={icon.title}
            size={currentSlug === "/services" ? "50%" : "100%"}
          >
            <FaBeer />
            <p>{icon.title}</p>
          </IconTextAlign>
          {currentSlug === "/services" && (
            <p className="icon-text">{icon.text}</p>
          )}
        </IconContainer>
      ))}
    </GridLayout>
  );
};
