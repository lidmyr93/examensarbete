import styled from "styled-components";

export const TopHomeWrapper = styled.div`
  width: 100%;
  height: 150vh;
  background: url(${props => props.background}) no-repeat center;
  background-size: cover;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 80vh;
  }

  .middle {
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
  }

  @media screen and (min-width: 768px) {
    .middle {
      height: 80%;

      h4 {
        font-size: 2rem;
      }
    }
  }
  .bottom {
    background: #2f2e2e;
    color: white;
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .slogans {
    display: flex;
    flex-direction: column;
    width: 80%;

    .firstRow {
      display: flex;
      justify-content: center;
      width: 100%;
      h3 {
        font-size: 1.5rem;
        margin: 0;
        color: white;
      }
    }
  }
  .icon {
    display: flex;
    align-items: center;
    margin-right: 10px;
    svg {
      width: 30px;
      height: 30px;
    }
  }
  .secondRow {
    font-size: 1.2rem;
    color: #a0a09f;
    padding-top: 10px;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    .bottom {
      flex-direction: row;
      align-items: initial;
      height: 20%;
      justify-content: center;
    }

    .slogans {
      width: 20%;
      border-right: 2px solid white;
      margin: 20px 0;
      padding: 0 50px;
      justify-content: center;

      .firstRow {
        display: flex;
        justify-content: center;
        h3 {
          font-size: 1.4rem;
          margin: 0;
          color: white;
        }
      }
      :last-child {
        border: none;
      }
    }
    .icon {
      svg {
        width: 25px;
        height: 25px;
      }
    }

    .secondRow {
      font-size: 0.8rem;
      color: gray;
      padding-top: 10px;
    }
  }
`;
