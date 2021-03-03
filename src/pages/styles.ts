import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  aside {
    width: 112px;
  }

  main {
    flex: 1;
  }
`;

export const MainContent = styled.main`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
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
