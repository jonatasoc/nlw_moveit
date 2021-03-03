import React from 'react';
import { FiHome } from 'react-icons/fi';
import { FaMedal } from 'react-icons/fa';

import { Container } from './styles';

const Sidebar: React.FC = () => {
  return (
    <>
      <Container>
        <img src="/logo.svg" alt="" />
        <div>
          <FiHome />
          <FaMedal />
        </div>
      </Container>
    </>
  );
};

export default Sidebar;
