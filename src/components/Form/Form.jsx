import React, { useState } from "react";

import { StyledForm, EmailConfirmation } from "./styles";
import { db } from "../../firebase.config";
import { useEffect } from "react";
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

    const data = {
      name: state.name,
      email: state.email,
      message: state.message
    };
    axios
      .post(
        "https://europe-west1-sthml-metall.cloudfunctions.net/submitEurope",
        data
      )
      .then(res => {
        setMailSent(true);
        return db.ref("messages").push(data);
      })
      .catch(error => {
        console.log(error);
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
