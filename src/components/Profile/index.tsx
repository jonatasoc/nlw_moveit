import React, { useContext } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import fetch from 'unfetch';

import { ChallengesContext } from '../../contexts/ChallengesContext';

const githubUserAPI = 'https://api.github.com/users/';

interface UserProps {
  name: string;
  avatar_url: string;
}

const fetcher = url => fetch(url).then(r => r.json());

export async function getStaticProps() {
  // TODO: Get the user from the Context. Create a UserContext

  const data: UserProps = await fetcher(`${githubUserAPI}jonatasoc`);
  return { props: { data } };
}

export default function Profile(props) {
  const initialData = props.data;

  const { data } = useSWR(`${githubUserAPI}jonatasoc`, fetcher, {
    initialData,
  });

  const userData: UserProps = data;

  const { level } = useContext(ChallengesContext);
  return (
    <Container>
      <img
        src={userData ? userData.avatar_url : '/anonymous.jpg'}
        alt={userData ? userData.name : 'Usuário Anônimo'}
      />
      <div>
        <strong>{userData ? userData.name : 'Usuário Anônimo'}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }

  div {
    margin-left: 1.5rem;

    strong {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--title);
    }

    p {
      display: flex;
      align-items: baseline;
      font-size: 1rem;
      margin-top: 0.5rem;

      img {
        margin-right: 0.5rem;
      }
    }
  }
`;
