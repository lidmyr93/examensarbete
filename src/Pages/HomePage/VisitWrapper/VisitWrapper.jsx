import React from "react";
import { Wrapper } from "./styles";
import { LinkImage } from "../../../components/LinkImage/LinkImage";
export const VisitWrapper = props => {
  const { title, text, button } = props.content;

  return (
    <Wrapper>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <LinkImage
        text={button.text}
        link={button.link}
        image={props.image}
        alt={button.text}
        imageHidden={true}
        buttonHidden={false}
      />
    </Wrapper>
  );
};
