import React from "react";
import { ContactBanner } from "../../components/ContactBanner/ContactBanner";
import { ServicesGrid } from "../../components/ServicesGrid/ServicesGrid";
import { content } from "../../content";
import { ServicesWrapper } from "./styles";
export const Services = () => {
  const { services } = content;
  return (
    <>
      <ServicesWrapper>
        <h1>{services.secTitle}</h1>
        <ServicesGrid content={services.icons} gridGap={true} />
      </ServicesWrapper>
      <ContactBanner />
    </>
  );
};
