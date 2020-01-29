import React from "react";
import { content } from "../../content";
import { ContactBanner } from "../../components/ContactBanner/ContactBanner";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import { LinkImage } from "../../components/LinkImage/LinkImage";
import wrapperImage from "../../Images/metalwork.jpg";
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
      <h1>{title}</h1>
      {text.map(item => (
        <p key={item.substring(1, 3)}>{item}</p>
      ))}
      <ButtonLink text={button.text} linkTo={button.link} visible={false} />

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

      <ContactBanner />
    </>
  );
};
