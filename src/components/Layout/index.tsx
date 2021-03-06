import { GlobalStyle } from '../../styles/global';
import styled from 'styled-components';
import Sidebar from '../Sidebar';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Container>
      <GlobalStyle />
      <Sidebar />
      <MainContent>{children}</MainContent>
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  main {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MainContent = styled.main`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }

  section {
    flex: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5.25rem;
    align-content: center;

    @media (max-width: 768px) {
      margin-top: 3rem;
      grid-template-columns: none;
      grid-template-rows: 1fr 1fr;
      gap: 1rem;
    }
  }
`;
