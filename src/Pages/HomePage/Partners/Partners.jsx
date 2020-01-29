import React from "react";
import { Wrapper } from "./styles";
import BrandImageOne from "../../../Images/bilsport.webp";
import BrandImageTwo from "../../../Images/norrhults.webp";
import BrandImageThree from "../../../Images/staten.webp";
import BrandImageFour from "../../../Images/alfalaval.webp";
import BrandImageFive from "../../../Images/probike.webp";
import BrandImageSix from "../../../Images/windy.webp";

export const PartnersWrapper = () => {
  let array = [
    BrandImageOne,
    BrandImageTwo,
    BrandImageThree,
    BrandImageFour,
    BrandImageFive,
    BrandImageSix
  ];

  return (
    <Wrapper>
      {array.map(image => (
        <img src={image} alt="brands" key={image} />
      ))}
    </Wrapper>
  );
};
