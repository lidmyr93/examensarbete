import React from "react";
import { FaBeer } from "react-icons/fa";
import { GridLayout, IconTextAlign, IconContainer } from "./styles";
import { getSlug } from "../../Utils/url";
export const ServicesGrid = props => {
  const { content, gridGap } = props;
  const currentSlug = getSlug();

  return (
    <GridLayout
      columns={currentSlug === "services" ? "100%" : "50% 50%"}
      gridGap={gridGap}
    >
      {content.map(icon => (
        <IconContainer>
          <IconTextAlign
            key={icon.title}
            size={currentSlug === "services" ? "50%" : "100%"}
          >
            <FaBeer />
            <p>{icon.title}</p>
          </IconTextAlign>
          {currentSlug === "services" && (
            <p className="icon-text">{icon.text}</p>
          )}
        </IconContainer>
      ))}
    </GridLayout>
  );
};
