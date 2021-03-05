import styled from 'styled-components';

const Container = styled.div`
  display: flex;

  main {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default Container;
