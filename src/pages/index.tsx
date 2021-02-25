import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import { GlobalStyle } from "../styles/global";
import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <GlobalStyle />
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
      </section>
    </Container>
  );
}
