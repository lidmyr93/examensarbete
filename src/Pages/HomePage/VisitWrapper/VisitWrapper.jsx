import React from "react";
import { Wrapper } from "./styles";
import { LinkImage } from "../../../components/LinkImage/LinkImage";
import { H2 } from "../../../globalStyles/globalStyles";
export const VisitWrapper = props => {
  const { title, text, button } = props.content;

  return (
    <Wrapper>
      <div>
        <H2 fontSize="1.5" margin="5px 0 20px 0" padding="0" width="100%">
          {title}
        </H2>
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
