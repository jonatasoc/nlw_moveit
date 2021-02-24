import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import { GlobalStyle } from "../styles/global";
import { Container } from "./styles";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <ExperienceBar />

        <section>
          <div>
            <Profile />
          </div>
        </section>
      </Container>
    </>
  );
}
