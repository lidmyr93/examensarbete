import styled from "styled-components";

export const ServicesWrapper = styled.div`
  height: 150vh;
  width: 90%;
  margin: 0 auto;

  h1 {
    width: 80%;
    text-align: center;
    margin: 30px auto 40px auto;
  }

  @media screen and (min-width: 768px) {
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
