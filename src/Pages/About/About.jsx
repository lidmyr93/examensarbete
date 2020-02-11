import React from "react";
import { content } from "../../content";
import { AboutWrapper, TextWrapper, ImageWrapper } from "./styles";
import { ContactBanner } from "../../components/ContactBanner/ContactBanner";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import { LinkImage } from "../../components/LinkImage/LinkImage";
import wrapperImage from "../../Images/metalwork.jpg";
import { H1 } from "../../globalStyles/globalStyles";
export const About = () => {
  const {
    title,
    text,
    button,
    imageButton,
    secImageButton
  } = content.aboutPage;

  return (
    <>
      <AboutWrapper>
        <TextWrapper>
          <H1 width="100%" align="left">
            {title}
          </H1>
          {text.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
          <ButtonLink
            text={button.text}
            linkTo={button.link}
            visible={true}
            borderRadius="5px"
          />
        </TextWrapper>

        <ImageWrapper>
          <LinkImage
            text={imageButton.button.text}
            link={imageButton.button.link}
            image={wrapperImage}
            alt={imageButton.button.text}
          />
          <LinkImage
            text={secImageButton.button.text}
            link={secImageButton.button.link}
            image={wrapperImage}
            alt={secImageButton.button.text}
          />
        </ImageWrapper>
      </AboutWrapper>
      <ContactBanner />
    </>
  );
};
