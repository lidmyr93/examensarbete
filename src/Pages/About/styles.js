import styled from "styled-components";

export const AboutWrapper = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 90vh;
  @media screen and (min-width: 768px) {
    width: 60%;
    height: 80vh;
    margin: 0 auto;
    flex-direction: row;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1,
  p {
    margin: 10px;
  }
  @media screen and (min-width: 768px) {
    height: 50%;
    width: 50%;
    align-items: flex-start;
    p:nth-child(3) {
      margin-bottom: 50px;
    }
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 60%;
  @media screen and (min-width: 768px) {
  }
`;
