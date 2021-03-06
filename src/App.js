import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import styled from "styled-components";
import { Header } from "./components/Header/Header";
import { content } from "./content";
import { HomePage } from "./Pages/HomePage/HomePage";
import { About } from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import { Contact } from "./Pages/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faClock,
  faPhoneAlt,
  faCog,
  faBrush,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
library.add(fab, faEnvelope, faClock, faPhoneAlt, faCog, faBrush, faCheck);
export const AppWrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: white;
  width: 100vw;
  max-width: 100%;
  height: auto;
  position: relative;
  @import url("https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap");
  font-family: "Roboto Condensed", sans-serif;
`;

export const MainContent = styled.div``;

function App() {
  return (
    <Router>
      <AppWrapper>
        <Header content={content.nav} />
        <MainContent>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
        </MainContent>
        <Footer content={content.footer} />
      </AppWrapper>
    </Router>
  );
}

export default App;
