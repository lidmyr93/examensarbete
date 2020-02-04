import React from "react";

import { content } from "../../content";

import wrapperImage from "../../Images/metalwork.jpg";

import { TopWrapper } from "./TopWrapper/TopWrapper";
import { VisitWrapper } from "./VisitWrapper/VisitWrapper";
import { ServicesWrapper } from "./Services/Services";
import { PartnersWrapper } from "./Partners/Partners";
import { ContactBanner } from "../../components/ContactBanner/ContactBanner";

export const HomePage = () => {
  const {
    companyTitle,
    homeBannerText,
    homeBannerSlogans,
    homeBannerLink,
    homePageVisit,
    services
  } = content;

  return (
    <>
      <TopWrapper
        background={wrapperImage}
        companyTitle={companyTitle}
        homeBannerText={homeBannerText}
        homeBannerSlogans={homeBannerSlogans}
        homeBannerLink={homeBannerLink}
      />
      <VisitWrapper content={homePageVisit} image={wrapperImage} />
      <ServicesWrapper content={services} />
      <PartnersWrapper />
      <ContactBanner />
    </>
  );
};
