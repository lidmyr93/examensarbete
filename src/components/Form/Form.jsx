import React, { useState } from "react";
import { StyledForm } from "./styles";
export const ContactForm = props => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("sent", state);
  };
  return (
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
  );
};
