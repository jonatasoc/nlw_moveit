import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;

  section {
    flex: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;

    @media (max-width: 576px) {
      margin-top: 3rem;
      grid-template-columns: none;
      grid-template-rows: 1fr 1fr;
      gap: 1rem;
    }
  }
`;

export default Container;
