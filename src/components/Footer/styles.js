import styled from "styled-components";

export const FooterWrapper = styled.footer`
  height: 60vh;
  background: #2f2e2e;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 10%;

  p {
    margin: 5px;
    color: #605e5e;
  }

  h5 {
    font-size: 1.4rem;
    margin: 0;
    color: #a0a09f;
  }
  @media screen and (min-width: 768px) {
    height: 25vh;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 2% 0 2% 0;
  }
`;

export const ServiceWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 35%;
    height: auto;
    h5,
    p {
      margin: 5px auto;
      width: 50%;
    }
  }
`;

export const ContactWrapper = styled.div`
  h5 {
    :first-child {
      margin-bottom: 15px;
    }
    :last-child {
      margin-top: 15px;
      width: 70%;
    }
  }
  @media screen and (min-width: 768px) {
    width: 35%;
    height: auto;

    h5 {
      width: 70%;
      margin-left: auto;
      margin-right: auto;
      font-size: 1.2rem;
    }
  }
`;
