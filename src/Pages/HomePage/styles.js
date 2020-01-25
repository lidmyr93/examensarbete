import styled from "styled-components";

export const TopHomeWrapper = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  .middle {
    height: 50%;
    width: 100%;
    margin-bottom: 8vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 4rem;
      text-align: center;
      margin: 0;
    }
    h4 {
      font-size: 2rem;
      text-align: center;
      margin: 0;
      padding-bottom: 30px;
    }
    span {
      width: 200px;
      height: 50px;
      background: rgba(97, 135, 181, 1);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    span a {
      text-decoration: none;
      color: white;
    }
  }

  .bottom {
    background: black;
    color: white;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
  }

  .slogans {
    display: flex;
    flex-direction: column;
    width: 15%;
    border-right: 2px solid white;
    margin: 20px 0;
    padding: 0 50px;
    .firstRow {
      display: flex;
      justify-content: space-between;
      h3 {
        margin: 0;
        color: white;
      }
    }
    .secondRow {
      font-size: 0.8rem;
      color: gray;
      padding-top: 10px;
    }
  }
`;
