import React, { useState } from "react";

import { StyledForm, EmailConfirmation } from "./styles";
import { db } from "../../firebase.config";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const ContactForm = props => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [mailSent, setMailSent] = useState(false);
  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post(
        "https://europe-west1-sthml-metall.cloudfunctions.net/submitEurope",
        state
      )
      .then(res => {
        if (res.status === 200) {
          setMailSent(true);
          return db.ref("messages").push(state);
        } else {
          throw new Error("Something went wrong with the email service");
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return !mailSent ? (
    <StyledForm onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={handleChange}
        placeholder="Namn *"
      />

      <input
        type="email"
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder="E-post *"
      />

      <textarea
        type="text"
        name="message"
        value={state.message}
        onChange={handleChange}
        placeholder="Meddelande"
      />

      <input type="submit" />
    </StyledForm>
  ) : (
    <EmailConfirmation>
      <p>Tack för ditt mail</p>
      <FontAwesomeIcon icon="check" size="4x" color="green" />
    </EmailConfirmation>
  );
};
