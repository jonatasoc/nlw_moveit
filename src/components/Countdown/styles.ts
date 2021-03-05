import styled, { keyframes } from 'styled-components';

interface ButtonProps {
  isActive?: boolean;
}

const dash = keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const dashCheck = keyframes`
  0% {
    stroke-dashoffset: -100;
  }
  100% {
    stroke-dashoffset: 900;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: var(--title);

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }

  > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: var(--white);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    > span {
      flex: 1;
    }

    span:first-child {
      border-right: 1px solid #f0f1f3;
    }

    span:last-child {
      border-left: 1px solid #f0f1f3;
    }
  }

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;

export const CountdownButton = styled.button<ButtonProps>`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background-color: ${props =>
    props.isActive ? 'var(--white)' : 'var(--blue)'};
  color: ${props => (props.isActive ? 'var(--text)' : 'var(--white)')};

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    margin-top: 2rem;
  }

  &:not(:disabled):hover {
    background: ${props =>
      props.isActive ? 'var(--red-dark)' : 'var(--blue-dark)'};
    color: ${props => (props.isActive ? 'var(--white)' : 'var(--text)')};
  }

  &:disabled {
    border-bottom: 3px solid var(--green);
  }

  svg {
    margin-left: 15px;
  }
`;

export const HasFinishedButton = styled(CountdownButton)`
  background: var(--white);
  color: var(--text);
  cursor: not-allowed;

  svg {
    color: var(--green);
    margin-left: 15px;
    width: 25px;
    height: auto;

    circle,
    polyline {
      stroke-dasharray: 1000;
      stroke-dashoffset: 0;
    }

    circle {
      animation: ${dash} 0.9s ease-in-out;
    }

    polyline {
      stroke-dashoffset: -100;
      animation: ${dashCheck} 0.9s 0.35s ease-in-out forwards;
    }
  }
`;
