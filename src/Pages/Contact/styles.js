import styled from "styled-components";

export const ContactWrapper = styled.div`
  height: auto;
  text-align: center;
  text-transform: uppercase;
  background: white;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    height: 50vh;
    padding: 30px 0;
  }
`;

export const ContactInfo = styled.div`
  text-align: left;
  padding-left: 10%;
  font-size: 16px;
  text-transform: initial;
  h5 {
    margin: 0;
    color: #0c4d9c;
    font-size: 1.1em;
  }
  p {
    margin: 0;
    color: #605e5e;
    font-size: 0.9em;
  }
  div {
    margin-bottom: 30px;
  }
  @media screen and (min-width: 768px) {
    h5 {
      font-size: 1.3em;
    }
    p {
      font-size: 1em;
    }
  }
`;

export const MapContainer = styled.div`
  text-align: center;
  padding: 0 10%;
  background: #eeefe4;
  padding-bottom: 20px;

  p {
    font-size: 1.2em;
    color: #605e5e;
  }
  .fakemap {
    height: 200px;
    margin: 0 auto;
    background: orange;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50vh;
    padding: 30px 0;

    .fakemap {
      width: 50%;
    }
  }
`;
