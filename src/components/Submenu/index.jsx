import React from 'react';
import './index.scss';

const Submenu = ({ status }) => {
  return (
    <div className={status ? `overlay overlay--active` : 'overlay'}>
      <div className="overlay-wrapper">
        <ul className="submenu lt">
          <li className="submenu__item">
            <a href="#" className="submenu__link">
              Cоциальные сети
            </a>
          </li>
          <li className="submenu__item">
            <a href="#" className="submenu__link">
              Вино
            </a>
          </li>
          <li className="submenu__item">
            <a href="#" className="submenu__link">
              Домены
              <svg
                className="submenu__link__arrow"
                width="20"
                height="24"
                viewBox="0 0 20 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-5.68248e-07 12L19.5 0.741668L19.5 23.2583L-5.68248e-07 12Z"
                  fill="#272727"
                />
              </svg>
            </a>
            <ul>
              <li className="submenu__item">
                <a href="#" className="submenu__link">
                  Премиальные
                </a>
              </li>
              <li className="submenu__item">
                <a href="#" className="submenu__link">
                  Премиальные
                </a>
              </li>
              <li className="submenu__item">
                <a href="#" className="submenu__link">
                  Премиальные
                </a>
              </li>
              <li className="submenu__item">
                <a href="#" className="submenu__link">
                  Премиальные
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Submenu;
