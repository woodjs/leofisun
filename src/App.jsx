import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="about">
        <div className="container">
          <div className="profile">
            <div className="profile-block">
              <img src="/images/profile.png" alt="" className="profile__img" />
              <div className="profile-badge">
                <div className="profile-badge__img">
                  <svg
                    width="28"
                    height="22"
                    viewBox="0 0 28 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.8 12L9.55 18.75L25.3 3"
                      stroke="white"
                      stroke-width="5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <h1 className="profile__title">Фисун Лев Андреевич</h1>
            <p className="profile__desc">
              Предприниматель, инвестор, контент-мейкер
            </p>
            <div className="profile-social">
              <div className="profile-social__icon">
                <svg
                  width="17"
                  height="15"
                  viewBox="0 0 17 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.67035 9.7532L6.38914 13.7085C6.79147 13.7085 6.96572 13.5357 7.17468 13.3282L9.06097 11.5254L12.9696 14.3878C13.6864 14.7873 14.1914 14.5769 14.3848 13.7284L16.9504 1.70653L16.9511 1.70582C17.1785 0.646154 16.5679 0.231779 15.8695 0.491737L0.789057 6.26536C-0.240152 6.66486 -0.224568 7.23861 0.614098 7.49857L4.46956 8.69778L13.425 3.09415C13.8465 2.81507 14.2297 2.96949 13.9145 3.24857L6.67035 9.7532Z"
                    fill="#656565"
                  />
                </svg>
              </div>
              <button className="profile-social__button">
                Упоминания в СМИ
              </button>
              <div className="profile-social__icon">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M17.4256 11.3995C17.0861 10.9707 17.1832 10.78 17.4256 10.3967C17.43 10.3924 20.2326 6.51961 20.5214 5.20623L20.5231 5.20536C20.6666 4.72673 20.5231 4.37498 19.8292 4.37498H17.5332C16.9487 4.37498 16.6792 4.67686 16.5349 5.01461C16.5349 5.01461 15.3659 7.81286 13.7121 9.62674C13.1784 10.1509 12.9316 10.3189 12.6402 10.3189C12.4967 10.3189 12.2736 10.1509 12.2736 9.67224V5.20536C12.2736 4.63136 12.11 4.37498 11.6261 4.37498H8.01587C7.64924 4.37498 7.43137 4.64273 7.43137 4.89211C7.43137 5.43636 8.25824 5.56148 8.34399 7.09274V10.4151C8.34399 11.1431 8.21187 11.277 7.91874 11.277C7.13824 11.277 5.24387 8.46736 4.12124 5.25173C3.89462 4.62786 3.67324 4.37586 3.08437 4.37586H0.787492C0.132117 4.37586 -7.62939e-06 4.67773 -7.62939e-06 5.01548C-7.62939e-06 5.61223 0.780492 8.57936 3.62949 12.4994C5.52824 15.1751 8.20224 16.625 10.6347 16.625C12.0969 16.625 12.2754 16.303 12.2754 15.7491C12.2754 13.1924 12.1432 12.9509 12.8756 12.9509C13.2151 12.9509 13.7996 13.1189 15.1646 14.4095C16.7247 15.9399 16.9811 16.625 17.8544 16.625H20.1504C20.8049 16.625 21.1365 16.303 20.9457 15.6677C20.5091 14.3316 17.5586 11.5832 17.4256 11.3995Z"
                      fill="#656565"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="21" height="21" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-smi">
        <div className="container">
          <div className="section-wrap">
            <div className="section__title">Информация в СМИ</div>
          </div>
          <div className="smi">
            <div className="smi-card">
              <p className="smi-card__title">SARREG.RU</p>
              <p className="smi-card__desc">
                В сети Интернет можно найти массу предложений, в которых всем
                желающим предлагается «уникальная» возможность заработать
                быстрые деньги. Причём для того, чтобы получать стабильный...
              </p>
              <div className="smi-card-footer">
                <div className="smi-card__date">25.06.2020</div>
                <p className="smi-card__read">Читать</p>
              </div>
            </div>
            <div className="smi-card">
              <p className="smi-card__title">vbalashihe.ru</p>
              <p className="smi-card__desc">
                Стремительное развитие информационных технологий, в том числе
                глобальной сети Интернет, привело к появлению новой отрасли в
                рыночном пространстве – электронной коммерции. Применение
                широчайшего...
              </p>
              <div className="smi-card-footer">
                <div className="smi-card__date">02.05.2020</div>
                <p className="smi-card__read">Читать</p>
              </div>
            </div>
            <div className="smi-card">
              <p className="smi-card__title">infoorel.ru</p>
              <p className="smi-card__desc">
                Как часто мы слышим и читаем информационные сообщения о
                бескрайних возможностях и неограниченном потенциале сети
                Интернет как бизнес-инструмента! Действительно, с течением
                времени...
              </p>
              <div className="smi-card-footer">
                <div className="smi-card__date">15.05.2020</div>
                <p className="smi-card__read">Читать</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-form">
        <div className="container">
          <div className="section-wrap">
            <p className="section__title">Контакты</p>
          </div>
          <div className="contact">213</div>
        </div>
      </section>
    </div>
  );
}

export default App;
