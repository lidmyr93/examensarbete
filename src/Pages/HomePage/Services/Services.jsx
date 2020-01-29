import React from "react";
import { FaBeer } from "react-icons/fa";
import { Wrapper, GridLayout, IconTextAlign } from "./styles";
export const ServicesWrapper = props => {
  const { title, text, icons } = props.content;

  return (
    <Wrapper>
      <div className="texts">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>

      <GridLayout>
        {icons.map(icon => (
          <IconTextAlign key={icon.text}>
            <FaBeer />
            <p>{icon.text}</p>
          </IconTextAlign>
        ))}
      </GridLayout>
    </Wrapper>
  );
};
