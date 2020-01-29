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
  }
  .column {
    display: flex;
    flex-direction: column;
    margin-left: 60px;
  }
  svg {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    align-self: center;
    color: white;
    font-weight: normal;
  }

  h5 {
    font-size: 1.5rem;
    margin: auto 0;
    color: white;
    font-weight: normal;
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
    padding: 0;

    .wrapperItem {
      height: 60%;
      padding: 0 100px;
      border-right: 1px solid white;

      :last-child {
        border: none;
      }
    }

    svg {
      width: 30px;
      height: 30px;
    }
    .column {
      margin: 10px 0 0 0;
    }
  }
`;
