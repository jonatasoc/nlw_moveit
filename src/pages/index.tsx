import Heade from "next/head";
import ExperienceBar from "../components/ExperienceBar";
import { Container, GlobalStyle } from "../styles/global";

export default function Home() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
        rel="stylesheet"
      />
      <GlobalStyle />
      <Container>
        <ExperienceBar />
      </Container>
    </>
  );
}
