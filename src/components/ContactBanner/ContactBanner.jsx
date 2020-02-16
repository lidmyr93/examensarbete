import React from "react";

import { content } from "../../content";
import { Wrapper } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const ContactBanner = () => {
  const { contactBanner } = content;

  return (
    <Wrapper>
      {contactBanner.map(item => (
        <div className="wrapperItem" key={item.title}>
          <div className="row">
            <FontAwesomeIcon icon={item.icon} />
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
