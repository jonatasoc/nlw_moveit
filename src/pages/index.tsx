import ExperienceBar from "../components/ExperienceBar/ExperienceBar";
import { Container, GlobalStyle } from "../styles/global";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <ExperienceBar />
      </Container>
    </>
  );
}
