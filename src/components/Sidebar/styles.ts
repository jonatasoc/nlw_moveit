import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  width: 100px;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  filter: drop-shadow(0px 0px 60px rgba(0, 0, 0, 0.05));

  img {
    width: 48px;
    margin: 0 auto;
    position: absolute;
    top: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    svg {
      font-size: 3.5rem;
      color: var(--blue);
      cursor: pointer;
      padding: 10px;
      transition: all 0.1s;

      &:hover {
        border-left: solid 7px var(--blue);
        box-shadow: 0px 1px 2px -1px var(--blue);
        border-radius: 0.4rem;
        /* border-radius: 0px 5px 5px 0px; */
      }
    }

    > svg {
      margin-bottom: 2rem;
      width: 100%;
    }
  }
`;
