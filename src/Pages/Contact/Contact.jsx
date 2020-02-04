import React from "react";
import { ContactBanner } from "../../components/ContactBanner/ContactBanner";
import { content } from "../../content";
import { ContactForm } from "../../components/Form/Form";
import { ContactWrapper, ContactInfo, MapContainer } from "./styles";

export const Contact = () => {
  const {
    title,
    phoneText,
    phoneNumber,
    emailText,
    email,
    openHoursText,
    openHours,
    secTitle,
    companyInfo
  } = content.contactPage;

  return (
    <>
      <ContactWrapper>
        <h1>{title}</h1>
        <ContactInfo>
          <div>
            <h5>{phoneText}</h5>
            <p>{phoneNumber}</p>
          </div>
          <div>
            <h5>{emailText}</h5>
            <p>{email}</p>
          </div>
          <div>
            <h5>{openHoursText}</h5>
            {openHours.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        </ContactInfo>
        <ContactForm />
      </ContactWrapper>
      <MapContainer>
        <h1>{secTitle}</h1>
        <p>{companyInfo}</p>
        <div className="fakemap"></div>
      </MapContainer>
      <ContactBanner />
    </>
  );
};
