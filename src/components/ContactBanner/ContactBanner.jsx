import React from "react";

import { content } from "../../content";
import { FaBeer } from "react-icons/fa";
import { Wrapper } from "./styles";
import { icons } from "react-icons";
export const ContactBanner = () => {
  const { contactBanner } = content;

  return (
    <Wrapper>
      {contactBanner.map(item => (
        <div className="wrapperItem" key={item.title}>
          <div className="row">
            <FaBeer />
            <h5>{item.title}</h5>
          </div>

          <span className="column">
            <p>{item.text}</p>
            {item.sectext && <p>{item.sectext}</p>}
          </span>
        </div>
      ))}
    </Wrapper>
  );
};
