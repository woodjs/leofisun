import React from 'react';
import './index.scss';
import Container from '../Container';
import MenuMain from '../MenuMain';

const Header = () => {
  return (
    <header className="header">
      <Container>
        <MenuMain />
      </Container>
    </header>
  );
};

export default Header;
