import React from "react";
import { ServicesGrid } from "../../../components/ServicesGrid/ServicesGrid";
import { Wrapper } from "./styles";
export const ServicesWrapper = props => {
  const { title, text, icons } = props.content;

  return (
    <Wrapper>
      <div className="texts">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>

      <ServicesGrid content={icons} />
    </Wrapper>
  );
};
