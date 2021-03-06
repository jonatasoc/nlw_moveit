import { GetServerSideProps } from 'next';
import React from 'react';
import styled from 'styled-components';

import { ChallengesProvider } from '../../contexts/ChallengesContext';

import Head from 'next/head';
import Layout from '../../components/Layout';

interface LeaderboardProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Leaderboard({
  level,
  currentExperience,
  challengesCompleted,
}: LeaderboardProps) {
  return (
    <Layout>
      <ChallengesProvider
        level={level}
        currentExperience={currentExperience}
        challengesCompleted={challengesCompleted}
      >
        <Head>
          <title>Leadboard | move.it</title>
        </Head>
        <LeadboardSection>
          <h1>Leadboader</h1>
          <Cabecalho>
            <p>POSIÇÃO</p>
            <p>USUÁRIO</p>
            <p>DESAFIOS</p>
            <p>EXPERÊNCIA</p>
          </Cabecalho>
          <CardUserDetailScore>
            <div>
              <p>1</p>
            </div>
            <div>
              <div>
                <img
                  src="https://github.com/jonatasoc.png"
                  alt="Jonatas de Oliveira Coelho"
                />
              </div>
              <div>
                <p>Jonatas de Oliveira Coelho</p>
                <p>
                  <img src="/icons/up.svg" alt="Level" />
                  <span>Level 43</span>
                </p>
              </div>
            </div>
            <p>
              <ScoreInfo>127 </ScoreInfo>
              <span>completados</span>
            </p>
            <p>
              <ScoreInfo>154000 </ScoreInfo>
              <span>xp</span>
            </p>
          </CardUserDetailScore>
          <CardUserDetailScore>
            <div>
              <p>1</p>
            </div>
            <div>
              <div>
                <img
                  src="https://github.com/jonatasoc.png"
                  alt="Jonatas de Oliveira Coelho"
                />
              </div>
              <div>
                <p>Jonatas de Oliveira Coelho</p>
                <p>
                  <img src="/icons/up.svg" alt="Level" />
                  <span>Level 43</span>
                </p>
              </div>
            </div>
            <p>
              <ScoreInfo>127 </ScoreInfo>
              <span>completados</span>
            </p>
            <p>
              <ScoreInfo>154000 </ScoreInfo>
              <span>xp</span>
            </p>
          </CardUserDetailScore>
          <CardUserDetailScore>
            <div>
              <p>1</p>
            </div>
            <div>
              <div>
                <img
                  src="https://github.com/jonatasoc.png"
                  alt="Jonatas de Oliveira Coelho"
                />
              </div>
              <div>
                <p>Jonatas de Oliveira Coelho</p>
                <p>
                  <img src="/icons/up.svg" alt="Level" />
                  <span>Level 43</span>
                </p>
              </div>
            </div>
            <p>
              <ScoreInfo>127 </ScoreInfo>
              <span>completados</span>
            </p>
            <p>
              <ScoreInfo>154000 </ScoreInfo>
              <span>xp</span>
            </p>
          </CardUserDetailScore>
          <CardUserDetailScore>
            <div>
              <p>1</p>
            </div>
            <div>
              <div>
                <img
                  src="https://github.com/jonatasoc.png"
                  alt="Jonatas de Oliveira Coelho"
                />
              </div>
              <div>
                <p>Jonatas de Oliveira Coelho</p>
                <p>
                  <img src="/icons/up.svg" alt="Level" />
                  <span>Level 43</span>
                </p>
              </div>
            </div>
            <p>
              <ScoreInfo>127 </ScoreInfo>
              <span>completados</span>
            </p>
            <p>
              <ScoreInfo>154000 </ScoreInfo>
              <span>xp</span>
            </p>
          </CardUserDetailScore>
          <CardUserDetailScore>
            <div>
              <p>1</p>
            </div>
            <div>
              <div>
                <img
                  src="https://github.com/jonatasoc.png"
                  alt="Jonatas de Oliveira Coelho"
                />
              </div>
              <div>
                <p>Jonatas de Oliveira Coelho</p>
                <p>
                  <img src="/icons/up.svg" alt="Level" />
                  <span>Level 43</span>
                </p>
              </div>
            </div>
            <p>
              <ScoreInfo>127 </ScoreInfo>
              <span>completados</span>
            </p>
            <p>
              <ScoreInfo>154000 </ScoreInfo>
              <span>xp</span>
            </p>
          </CardUserDetailScore>
          <CardUserDetailScore>
            <div>
              <p>1</p>
            </div>
            <div>
              <div>
                <img
                  src="https://github.com/jonatasoc.png"
                  alt="Jonatas de Oliveira Coelho"
                />
              </div>
              <div>
                <p>Jonatas de Oliveira Coelho</p>
                <p>
                  <img src="/icons/up.svg" alt="Level" />
                  <span>Level 43</span>
                </p>
              </div>
            </div>
            <p>
              <ScoreInfo>127 </ScoreInfo>
              <span>completados</span>
            </p>
            <p>
              <ScoreInfo>154000 </ScoreInfo>
              <span>xp</span>
            </p>
          </CardUserDetailScore>
          <CardUserDetailScore>
            <div>
              <p>1</p>
            </div>
            <div>
              <div>
                <img
                  src="https://github.com/jonatasoc.png"
                  alt="Jonatas de Oliveira Coelho"
                />
              </div>
              <div>
                <p>Jonatas de Oliveira Coelho</p>
                <p>
                  <img src="/icons/up.svg" alt="Level" />
                  <span>Level 43</span>
                </p>
              </div>
            </div>
            <p>
              <ScoreInfo>127 </ScoreInfo>
              <span>completados</span>
            </p>
            <p>
              <ScoreInfo>154000 </ScoreInfo>
              <span>xp</span>
            </p>
          </CardUserDetailScore>
        </LeadboardSection>
      </ChallengesProvider>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const user = {
    level: 1,
    currenteExperience: 50,
  };

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};

const LeadboardSection = styled.section`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    color: #2e384d;
    margin-bottom: 40px;
  }
`;

const Cabecalho = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 2fr 2fr;
  width: 100%;
  margin-bottom: 24px;

  p {
    font-size: 0.8rem;
    color: var(--text);
    font-weight: 700;
  }

  p:first-child {
    width: 65px;
    margin-right: 35px;
  }

  p:nth-child(2) {
    flex: 1;
  }
`;

const CardUserDetailScore = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 2fr 2fr;
  align-items: center;

  background: #fff;
  border-radius: 5px 0px 0px 5px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  p {
    font-weight: 500;
  }

  > div:first-child {
    border-right: 4px solid var(--background);
    border-radius: 5px 0px 0px 5px;

    p {
      text-align: center;
      width: 100%;
    }
  }

  > div {
    display: flex;
    padding: 1rem;

    align-items: center;

    div:first-child {
      > img {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        margin-right: 16px;
      }
    }

    div:nth-child(2) {
      p:first-child {
        font-weight: 600;
        margin-bottom: 7px;
      }

      span {
        font-weight: 400;
        font-size: 1rem;
        margin-left: 9px;
      }
    }
  }
`;

const ScoreInfo = styled.span`
  color: var(--blue);
`;
