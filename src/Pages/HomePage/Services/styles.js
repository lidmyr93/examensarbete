import styled from "styled-components";

export const Wrapper = styled.div`
  background: #eeefe4;
  height: 80vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .texts p {
    width: 80%;
    color: gray;
    line-height: 20px;
    font-size: 1.2rem;
    letter-spacing: 1px;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    height: 60vh;
    justify-content: space-around;
    align-items: center;

    h1 {
      margin-bottom: 30px;
    }
    p {
      width: 50%;
    }
  }
`;
