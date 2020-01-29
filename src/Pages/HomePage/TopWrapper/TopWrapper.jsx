import React from "react";
import { TopHomeWrapper } from "./styles";
import { ButtonLink } from "../../../components/ButtonLink/ButtonLink";
import { FaBeer, FaAccessibleIcon } from "react-icons/fa";

export const TopWrapper = props => {
  const {
    background,
    companyTitle,
    homeBannerText,
    homeBannerSlogans,
    homeBannerLink
  } = props;
  return (
    <TopHomeWrapper background={background}>
      <div className="middle">
        <h1>{companyTitle}</h1>
        <h4>{homeBannerText}</h4>
        <ButtonLink linkTo={homeBannerLink.link} text={homeBannerLink.text} />
      </div>

      <div className="bottom">
        {Object.entries(homeBannerSlogans).map(slogan => (
          <div className="slogans" key={slogan[1].title}>
            <span className="firstRow">
              <span className="icon">
                <FaBeer />
              </span>
              <h3>{slogan[1].title}</h3>
            </span>
            <span className="secondRow">{slogan[1].text}</span>
          </div>
        ))}
      </div>
    </TopHomeWrapper>
  );
};
