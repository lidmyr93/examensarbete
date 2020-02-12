import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  width: 80%;
  height: 400px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 30%;
    margin: 0;
  }
  input[name="name"],
  input[name="email"],
  textarea {
    width: 100%;
    height: 40px;
    font-size: 1rem;
  }

  input[name="name"] {
  }
  input[name="email"] {
    margin: 20px 0;
  }

  textarea {
    height: 160px;
    resize: none;
    overflow-y: scroll;
    font-family: helvetica;
  }

  input[type="submit"] {
    width: 20%;
    height: 30px;
    align-self: flex-end;
    margin: 20px 0;
    background: #0c4d9c;
    border: none;
    color: white;
  }
`;

export const EmailConfirmation = styled.div`
  height: 380px;
  width: 80%;
  margin: 0 auto 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    margin-bottom: 50px;
  }

  @media screen and (min-width: 768px) {
    box-sizing: border-box;
    width: 30%;
    margin: 0;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    padding-top: 3%;
    padding-left: 3%;

    p {
      font-size: 1.5rem;
    }
  }
`;
