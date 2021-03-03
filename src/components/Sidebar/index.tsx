import React from 'react';
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
          <FiHome />
          <FaMedal />
        </div>
      </Container>
    </>
  );
};

export default Sidebar;
