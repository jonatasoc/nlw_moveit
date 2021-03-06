import React, { useState } from 'react';
import styled from 'styled-components';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiHome } from 'react-icons/fi';
import { FaMedal } from 'react-icons/fa';
import { IconBaseProps } from 'react-icons/lib';

export default function Sidebar() {
  const router = useRouter();

  const pathname = router.pathname;

  return (
    <>
      <Container>
        <div>
          <img src="/logo.svg" alt="" />
        </div>
        <div>
          <Link href="/">
            <a>
              <FiHome className={pathname === '/' ? 'active' : ''} />
            </a>
          </Link>
          <Link href="/leaderboard">
            <a>
              <FaMedal
                className={pathname === '/leaderboard' ? 'active' : ''}
              />
            </a>
          </Link>
        </div>
      </Container>
    </>
  );
}

const Container = styled.aside`
  display: flex;
  width: 100px;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;

  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  filter: drop-shadow(0px 0px 60px rgba(0, 0, 0, 0.05));

  div:first-child {
    width: 48px;
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
      font-size: 2.5rem;
      color: var(--blue);
      cursor: pointer;
      padding: 10px;
      transition: all 0.2s;
      box-sizing: content-box;

      &:hover {
        border-left: solid 7px var(--blue);
        box-shadow: 0px 0px 1px -1px var(--blue);
        border-radius: 0.4rem;
      }
    }

    svg:first-child {
      margin-bottom: 2rem;
    }

    .active {
      border-left: solid 7px var(--blue);
      box-shadow: 0px 0px 1px -1px var(--blue);
      border-radius: 0.4rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 80px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

    position: initial;

    img {
      width: 30px;
      margin-left: 10px;
      position: initial;
    }

    div:first-child {
      position: initial;
    }

    div:last-child {
      flex-direction: row;
      flex: 1;
      justify-content: flex-end;
      margin-right: 10px;

      svg {
        width: 30px;

        &:hover {
          border-bottom: solid 7px var(--blue);
          border-left: 0;
          box-shadow: 0px 0px 3px -1px var(--blue);
          /* border-radius: 0.4rem; */
        }
      }

      svg:first-child {
        margin-bottom: 0;
      }
    }
  }
`;
