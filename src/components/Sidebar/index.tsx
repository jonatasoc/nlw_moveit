import React from 'react';
import Link from 'next/link';
import { FiHome } from 'react-icons/fi';
import { FaMedal } from 'react-icons/fa';

import { Container } from './styles';

const Sidebar: React.FC = () => {
  return (
    <>
      <Container>
        <div>
          <img src="/logo.svg" alt="" />
        </div>
        <div>
          <Link href="/">
            <a>
              <FiHome />
            </a>
          </Link>
          <Link href="/leaderboard">
            <a>
              <FaMedal />
            </a>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Sidebar;
