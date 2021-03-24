import React, { useState } from 'react';
import './index.scss';
import MenuLogo from '../MenuLogo';
import MenuMobile from '../MenuMobile';

const MenuBurger = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClickBurger = () => {
    setMenuOpen(() => !menuOpen);
  };
  return (
    <div className="menu menu--mobile">
      <MenuLogo />
      <div className="menu-burger" onClick={handleClickBurger}>
        <span className="menu-burger__lines"></span>
      </div>
      <MenuMobile open={menuOpen} />
    </div>
  );
};

export default MenuBurger;
