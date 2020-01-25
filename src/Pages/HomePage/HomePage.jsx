import React from "react";
import { TopHomeWrapper } from "./styles";
import { content } from "../../content";

export const HomePage = () => {
  const {
    companyTitle,
    homeBannerImage,
    homeBannerText,
    homeBannerSlogans,
    homeBannerLink
  } = content;

  return (
    <TopHomeWrapper>
      <div className="middle">
        <h1>{companyTitle}</h1>
        <h4>{homeBannerText}</h4>
        <span>
          <a href={`${Object.keys(homeBannerLink)}`}>
            {homeBannerLink.services}
          </a>
        </span>
      </div>

      <div className="bottom">
        {Object.entries(homeBannerSlogans).map(slogan => (
          <div className="slogans" key={slogan[1].title}>
            <span className="firstRow">
              <span>ö</span>
              <h3>{slogan[1].title}</h3>
            </span>
            <span className="secondRow">{slogan[1].text}</span>
          </div>
        ))}
      </div>
    </TopHomeWrapper>
  );
};
