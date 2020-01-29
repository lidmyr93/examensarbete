import styled from "styled-components";

export const Wrapper = styled.div`
  height: 40vh;
  width: 100%;
  background: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  img {
    filter: grayscale(100%);
    padding: 10px;
  }

  @media screen and (min-width: 768px) {
    height: 25vh;
    align-items: center;
  }
`;
