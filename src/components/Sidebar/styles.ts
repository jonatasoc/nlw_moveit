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

  div:last-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    svg {
      width: 80px;
      font-size: 3.5rem;
      color: var(--blue);
      cursor: pointer;
      padding: 10px;
      transition: all 0.2s;

      &:hover {
        border-bottom: solid 7px var(--blue);
        box-shadow: 0px 1px 2px -1px var(--blue);
        border-radius: 0.4rem;
      }
    }

    svg:first-child {
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 112px;

    flex-direction: row;
    justify-content: space-between;

    img {
      margin-left: 10px;
      position: initial;
    }

    div:last-child {
      flex-direction: row;
      flex: 1;
      justify-content: flex-end;

      svg {
        box-sizing: content-box;
        font-size: 2.5rem;

        &:hover {
          border-bottom: solid 7px var(--blue);
          box-shadow: 0px 1px 2px -1px var(--blue);
          border-radius: 0.4rem;
        }
      }

      svg:first-child {
        margin-bottom: 0;
      }
      svg:last-child {
        margin-right: 20px;
      }
    }
  }
`;
