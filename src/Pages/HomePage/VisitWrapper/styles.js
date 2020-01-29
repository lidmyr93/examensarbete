import styled from "styled-components";

export const Wrapper = styled.div`
  background: white;
  height: 50vh;
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  h2 {
    text-transform: uppercase;
    text-align: center;
  }

  p {
    text-align: center;
    width: 80%;
    margin: 0 auto;
    color: gray;
    line-height: 20px;
    font-size: 1.2rem;
    letter-spacing: 1px;
  }

  @media screen and (min-width: 768px) {
    height: 35vh;
    flex-direction: row;
    justify-content: center;

    div {
      max-width: 30%;
      width: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.1rem;
    }
  }
`;
