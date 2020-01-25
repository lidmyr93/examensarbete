import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./components/Header/Header";
import { content } from "./content";
import { HomePage } from "./Pages/HomePage/HomePage";
import { About } from "./Pages/About";
import { Services } from "./Pages/Services";
import { Contact } from "./Pages/Contact";

export const AppWrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: lightgray;
  width: 100vw;
  height: auto;
`;

export const MainContent = styled.div``;

function App() {
  return (
    <Router>
      <AppWrapper>
        <Header content={content.nav} />
        <MainContent>
          <Route path="/" exact component={HomePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
        </MainContent>
      </AppWrapper>
    </Router>
  );
}

export default App;
