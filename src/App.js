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

export const AppWrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: white;
  width: 100vw;
  max-width: 100%;
  height: auto;
  position: relative;
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
