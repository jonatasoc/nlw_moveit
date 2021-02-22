import React from "react";
import ExperienceBar from "./components/ExperienceBar";
import { Container, GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <ExperienceBar />
      </Container>
    </>
  );
}

export default App;
