import styled from "styled-components";

export const GridLayout = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: ${props => props.columns};
  height: 60%;
  @media screen and (min-width: 768px) {
    width: 70%;
    height: ${props => props.height};
    grid-template-columns: 1fr 1fr;
    gap: ${props => (props.gridGap ? "50px 100px" : "0")};
  }
`;
export const IconContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
    text-align: center;
    color: #2f2e2e;
    font-size: 1.2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .icon-text {
    width: 100%;
    text-align: center;
    margin: 15px 0 30px 0;
    text-transform: initial;
  }
  @media screen and (min-width: 768px) {
    p {
      width: 50%;
    }
  }
`;
export const IconTextAlign = styled.div`
  width: ${props => props.size};
  height: auto;
  text-align: center;
  img {
    width: 75px;
    height: 75px;
  }
  p {
  }

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    img {
      width: 100px;
      height: 100px;
      margin: 0;
    }
  }
`;
