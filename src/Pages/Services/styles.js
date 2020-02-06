import styled from "styled-components";

export const ServicesWrapper = styled.div`
  height: auto;
  width: 90%;
  margin: 0 auto;

  h1 {
    width: 80%;
    text-align: center;
    margin: 30px auto 40px auto;
  }

  @media screen and (min-width: 768px) {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  padding: 0 10%;
  .loader {
    text-align: center;
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    padding: 0;
    .loader {
      margin-top: 100px;
    }
  }
`;
