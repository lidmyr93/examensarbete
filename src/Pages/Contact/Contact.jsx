import React from "react";
import { ContactBanner } from "../../components/ContactBanner/ContactBanner";
import { content } from "../../content";
import { ContactForm } from "../../components/Form/Form";
import { ContactWrapper, ContactInfo, MapContainer } from "./styles";
import { H1 } from "../../globalStyles/globalStyles";
import GoogleMap from "../../components/Map/Map";

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
        <H1 width="100%" margin="0 0 30px 0" padding="20px 0 0 0">
          {title}
        </H1>
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
        <H1 margin="0 0 20px 0" width="100%">
          {secTitle}
        </H1>
        <p>{companyInfo}</p>
        <GoogleMap />
      </MapContainer>
      <ContactBanner />
    </>
  );
};
