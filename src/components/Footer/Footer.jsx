import React from "react";
import { FooterWrapper, ServiceWrapper, ContactWrapper } from "./styles";
export const Footer = props => {
  const { services, contactInfo } = props.content;

  return (
    <FooterWrapper>
      <ServiceWrapper>
        <h5>{services.title}</h5>
        {services.services.map(item => (
          <p key={item}>#{item}</p>
        ))}
      </ServiceWrapper>

      <ContactWrapper>
        <h5>{contactInfo.title}</h5>
        {contactInfo.adress.map(item => (
          <h5 key={item}>{item}</h5>
        ))}

        <h5>{contactInfo.shipInfo}</h5>
      </ContactWrapper>
    </FooterWrapper>
  );
};
