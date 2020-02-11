import React from "react";
import { FaBeer } from "react-icons/fa";
import { GridLayout, IconTextAlign, IconContainer } from "./styles";
import { useLocation } from "react-router-dom";
import chromium from "../../Images/chromium.svg";
import gold from "../../Images/gold.svg";
import polishing from "../../Images/polishing.svg";
import rim from "../../Images/rim.svg";
import { useEffect } from "react";
export const ServicesGrid = props => {
  const { content, gridGap } = props;
  const currentSlug = useLocation().pathname;
  const images = [polishing, chromium, rim, gold];

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
            <img src={images[i]} />
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
