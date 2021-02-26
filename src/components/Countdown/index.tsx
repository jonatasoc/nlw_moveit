import React, { useContext, useEffect, useState } from 'react';
import { MdPlayArrow, MdClose } from 'react-icons/md';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container, CountdownButton, HasFinishedButton } from './styles';

let countdownTimeout: NodeJS.Timeout;

const Countdown: React.FC = () => {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function handleCoutdown() {
    // If false, start a new Countdown
    if (!isActive) {
      setIsActive(true);
    }

    if (isActive) {
      clearTimeout(countdownTimeout);
      setIsActive(false);
      return setTime(25 * 60);
    }
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <div>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>

      {hasFinished ? (
        <HasFinishedButton type="button" disabled>
          Ciclo Encerrado
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 130.2 130.2"
          >
            <circle
              fill="#4cd62b"
              stroke="#4cd62b"
              strokeWidth="6"
              strokeMiterlimit="10"
              cx="65.1"
              cy="65.1"
              r="62.1"
            />
            <polyline
              fill="none"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="100.2,40.2 51.5,88.8 29.8,67.5 "
            />
          </svg>
        </HasFinishedButton>
      ) : (
        <CountdownButton
          type="button"
          onClick={handleCoutdown}
          isActive={isActive}
        >
          {isActive ? 'Abandonar Ciclo' : 'Iniciar um ciclo'}
          {isActive ? <MdClose size={25} /> : <MdPlayArrow size={25} />}
        </CountdownButton>
      )}
    </div>
  );
};

export default Countdown;
