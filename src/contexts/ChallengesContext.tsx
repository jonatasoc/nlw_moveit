import { createContext, ReactNode, useState } from 'react';

export const ChallengesContext = createContext({});

interface ChallengesProviderProps {
  children: ReactNode;
}

export function ChallengesProvider({ ...children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExpirience, setCurrentExpirience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    console.log('adadfadf');
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        currentExpirience,
        challengesCompleted,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
