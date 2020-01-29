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
    h1 {
      font-size: 2.3rem;
      text-align: center;
      margin: 0;
      padding-bottom: 30px;
    }
    h4 {
      font-size: 1.5rem;
      text-align: center;
      margin: 0;
      padding-bottom: 30px;
    }
  }

  @media screen and (min-width: 768px) {
    .middle {
      height: 80%;
      h1 {
        font-size: 4rem;
      }
      h4 {
        font-size: 2rem;
      }
    }
  }
  .bottom {
    background: black;
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
      h3 {
        font-size: 1.8rem;
        margin: 0;
        color: white;
      }
    }
  }
  .icon {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
  .secondRow {
    font-size: 1.2rem;
    color: gray;
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

    .secondRow {
      font-size: 0.8rem;
      color: gray;
      padding-top: 10px;
    }
  }
`;
