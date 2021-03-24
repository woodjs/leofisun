import React, { useState } from 'react';
import './index.scss';

const MobileSubmenuItem = ({ value, children }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const handleClickItem1 = () => {
    setSubmenuOpen(() => !submenuOpen);
  };

  return (
    <li className="mobile-submenu__item" onClick={handleClickItem1}>
      {value}
      <svg
        className="mobile-submenu__item__arrow"
        width="5"
        height="8"
        viewBox="0 0 5 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.05719 4L0.195262 1.13807C-0.0650877 0.877721 -0.0650877 0.455612 0.195262 0.195262C0.455611 -0.0650873 0.877721 -0.0650874 1.13807 0.195262L4.4714 3.5286C4.73175 3.78894 4.73175 4.21105 4.4714 4.4714L1.13807 7.80474C0.877722 8.06509 0.455612 8.06509 0.195262 7.80474C-0.0650874 7.54439 -0.0650874 7.12228 0.195262 6.86193L3.05719 4Z"
          fill="#92929D"
        />
      </svg>
      <ul
        class={
          submenuOpen
            ? `mobile-submenu mobile-submenu--active mobile-submenu--ml`
            : 'mobile-submenu mobile-submenu--ml'
        }
      >
        {children}
      </ul>
    </li>
  );
};

export default MobileSubmenuItem;
