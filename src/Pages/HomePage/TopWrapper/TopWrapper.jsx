import React from "react";
import { TopHomeWrapper } from "./styles";
import { ButtonLink } from "../../../components/ButtonLink/ButtonLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { H1 } from "../../../globalStyles/globalStyles";

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
        <H1 fontSize="2" color="#fff" padding="0 0 30px 0" width="100%">
          {companyTitle}
        </H1>
        <H1 color="#fff" fontSize="1.3" padding="0 0 30px 0" width="100%">
          {homeBannerText}
        </H1>
        <ButtonLink
          linkTo={homeBannerLink.link}
          text={homeBannerLink.text}
          borderRadius="5px"
        />
      </div>

      <div className="bottom">
        {Object.entries(homeBannerSlogans).map(slogan => (
          <div className="slogans" key={slogan[1].title}>
            <span className="firstRow">
              <span className="icon">
                <FontAwesomeIcon icon={slogan[1].logo} />
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
