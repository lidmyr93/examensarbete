import styled from "styled-components";

export const Wrapper = styled.div`
  height: 50vh;
  background: #6187b5;
  padding-left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 100%;

  .row {
    /* height: calc((50vh / 3) - 5vh); */
    display: flex;
    justify-content: flex-start;
    width: auto;
  }
  .column {
    display: flex;
    flex-direction: column;
    margin-left: 60px;
  }
  svg {
    width: 30px !important;
    height: 30px !important;
    margin-right: 10px;
    align-self: center;
    color: white;
    font-weight: normal;
  }

  h5 {
    font-size: 1.4rem;
    margin: auto 0;
    color: white;
    font-weight: normal;
    text-transform: uppercase;
  }

  p {
    margin: 0;
    color: #b1c9e6;
  }

  @media screen and (min-width: 768px) {
    height: 15vh;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-items: center;
    padding: 0;

    .wrapperItem {
      height: 60%;
      width: 25%;
      padding: 0 10px 0 10px;
      border-right: 1px solid white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      :last-child {
        border: none;
      }
    }

    .row {
      justify-content: center;
    }
    h5 {
      font-size: 1.3rem;
    }
    svg {
      width: 25px !important;
      height: 25px !important;
    }
    .column {
      margin: 0 0 0 0;
      height: 40%;
      justify-content: center;
      align-items: center;
    }
  }
`;
