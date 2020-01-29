import styled from "styled-components";

export const Wrapper = styled.div`
  background: beige;
  height: 80vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    text-transform: uppercase;
  }

  p {
    width: 80%;
    margin: 0 auto;
    color: gray;
    line-height: 20px;
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
  @media screen and (min-width: 768px) {
    height: 60vh;
    align-items: center;
    justify-content: space-around;

    h1 {
      margin-bottom: 30px;
    }
    p {
      width: 50%;
    }
  }
`;

export const GridLayout = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
  grid-template-columns: 50% 50%;
  height: 60%;
  @media screen and (min-width: 768px) {
    width: 35%;
  }
`;

export const IconTextAlign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  svg {
    width: 50%;
    height: 50%;
    margin: 0 auto;
  }

  p {
    font-size: 1.6rem;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
