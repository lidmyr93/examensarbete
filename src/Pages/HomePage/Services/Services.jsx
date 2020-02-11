import React from "react";
import { ServicesGrid } from "../../../components/ServicesGrid/ServicesGrid";
import { Wrapper } from "./styles";
import { H2 } from "../../../globalStyles/globalStyles";
export const ServicesWrapper = props => {
  const { title, text, icons } = props.content;

  return (
    <Wrapper>
      <div className="texts">
        <H2 width="100%" fontSize="1.5" margin="10px 0 25px 0">
          {title}
        </H2>
        <p>{text}</p>
      </div>

      <ServicesGrid content={icons} />
    </Wrapper>
  );
};
