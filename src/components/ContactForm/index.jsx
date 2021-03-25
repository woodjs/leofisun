/** @format */

import React from 'react';
import './ContactForm.scss';
import Container from '../Container';

const ContactForm = () => {
  return (
    <div class="container">
      <div className="section-wrap section-contact">
        <div className="section__title">Контакты</div>
      </div>
      <div className="contact">
        <div className="contact-left">
          <div className="contact-text">
            <p className="contact-text__title">Мои контакты</p>
            <p className="contact-text__subtitle">и обратная связь</p>
          </div>
          <div className="contact-social">
            <div className="contact-social__item">
              <div className="contact-social__icon">
                <svg
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.444 21.5108C17.0257 21.5108 20.7399 17.7966 20.7399 13.2149C20.7399 8.63318 17.0257 4.91896 12.444 4.91896C7.86224 4.91896 4.14802 8.63318 4.14802 13.2149C4.14802 17.7966 7.86224 21.5108 12.444 21.5108ZM12.444 23.5848C18.1711 23.5848 22.8139 18.9421 22.8139 13.2149C22.8139 7.48775 18.1711 2.84497 12.444 2.84497C6.71681 2.84497 2.07404 7.48775 2.07404 13.2149C2.07404 18.9421 6.71681 23.5848 12.444 23.5848Z"
                    fill="#828282"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.2553 19.62C15.0213 18.088 15.555 15.8263 15.555 13.2149C15.555 10.6035 15.0213 8.34183 14.2553 6.80977C13.4272 5.15365 12.667 4.91896 12.444 4.91896C12.221 4.91896 11.4608 5.15365 10.6327 6.80977C9.86667 8.34183 9.33302 10.6035 9.33302 13.2149C9.33302 15.8263 9.86667 18.088 10.6327 19.62C11.4608 21.2761 12.221 21.5108 12.444 21.5108C12.667 21.5108 13.4272 21.2761 14.2553 19.62ZM12.444 23.5848C15.3076 23.5848 17.629 18.9421 17.629 13.2149C17.629 7.48775 15.3076 2.84497 12.444 2.84497C9.58042 2.84497 7.25903 7.48775 7.25903 13.2149C7.25903 18.9421 9.58042 23.5848 12.444 23.5848Z"
                    fill="#828282"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.7627 14.2519C22.7966 13.9108 22.8139 13.5649 22.8139 13.2149C22.8139 12.8649 22.7966 12.519 22.7627 12.1779H2.12524C2.09137 12.519 2.07404 12.8649 2.07404 13.2149C2.07404 13.5649 2.09137 13.9108 2.12524 14.2519H22.7627Z"
                    fill="#828282"
                  />
                </svg>
              </div>
              <p className="contact-social__title">
                Веб-сайты:{' '}
                <span className="contact-social__title__value">
                  <a href="#">qcentrum.com</a>/<a href="#">leofisun.com</a>
                </span>
              </p>
            </div>
            <div className="contact-social__item">
              <div className="contact-social__icon">
                <svg
                  width="24"
                  height="14"
                  viewBox="0 0 24 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.786 12.3671C23.7215 12.2591 23.3225 11.392 21.4024 9.60991C19.3922 7.74377 19.6622 8.04679 22.0834 4.82005C23.558 2.8549 24.1476 1.65481 23.963 1.14178C23.7875 0.65274 22.7029 0.78175 22.7029 0.78175L19.0967 0.802751C19.0967 0.802751 18.8297 0.766749 18.6301 0.885258C18.4366 1.00227 18.3121 1.27229 18.3121 1.27229C18.3121 1.27229 17.7406 2.7934 16.9785 4.0865C15.3719 6.8152 14.7284 6.95921 14.4658 6.7897C13.8553 6.39517 14.0083 5.20258 14.0083 4.35652C14.0083 1.71182 14.4088 0.609237 13.2267 0.324216C12.8337 0.229709 12.5457 0.166704 11.5421 0.156203C10.255 0.142702 9.16445 0.160704 8.5479 0.462226C8.13687 0.663241 7.82035 1.11177 8.01386 1.13728C8.25238 1.16878 8.79242 1.28279 9.07894 1.67282C9.44947 2.17535 9.43597 3.30644 9.43597 3.30644C9.43597 3.30644 9.64899 6.41917 8.93943 6.8062C8.4519 7.07172 7.78435 6.53018 6.35174 4.05349C5.61819 2.7859 5.06315 1.3833 5.06315 1.3833C5.06315 1.3833 4.95664 1.12228 4.76613 0.982765C4.53511 0.813252 4.21108 0.759248 4.21108 0.759248L0.781832 0.78025C0.781832 0.78025 0.267294 0.795251 0.0782796 1.01877C-0.0897328 1.21828 0.0647786 1.62931 0.0647786 1.62931C0.0647786 1.62931 2.74998 7.91028 5.7892 11.077C8.57791 13.9797 11.7431 13.7892 11.7431 13.7892H13.1772C13.1772 13.7892 13.6108 13.7412 13.8313 13.5027C14.0353 13.2837 14.0278 12.8726 14.0278 12.8726C14.0278 12.8726 13.9993 10.948 14.8934 10.6645C15.7739 10.3855 16.905 12.5246 18.1036 13.3482C19.0097 13.9707 19.6982 13.8342 19.6982 13.8342L22.904 13.7892C22.904 13.7892 24.5811 13.6857 23.786 12.3671Z"
                    fill="#828282"
                  />
                </svg>
              </div>

              <p className="contact-social__title">
                Вконтакте:{' '}
                <span className="contact-social__title__value">
                  <a href="#">vk.com/leonardo</a>
                </span>
              </p>
            </div>
            <div className="contact-social__item">
              <div className="contact-social__icon">
                <svg
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.417 13.181L9.02 18.765C9.588 18.765 9.83399 18.521 10.129 18.228L12.792 15.683L18.31 19.724C19.322 20.288 20.035 19.991 20.308 18.793L23.93 1.82098L23.931 1.81998C24.252 0.323978 23.39 -0.261022 22.404 0.105978L1.11399 8.25698C-0.339005 8.82098 -0.317005 9.63098 0.866995 9.99798L6.30999 11.691L18.953 3.77998C19.548 3.38598 20.089 3.60398 19.644 3.99798L9.417 13.181Z"
                    fill="#828282"
                  />
                </svg>
              </div>

              <p className="contact-social__title">
                Telegram:{' '}
                <span className="contact-social__title__value">
                  <a href="#">@Steklie</a>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <div className="contact-form-group contact-form-group--flex">
            <input
              type="text"
              className="contact-form__input contact-form-control"
              placeholder="Имя"
            />
            <input
              type="email"
              className="contact-form__input contact-form-control"
              placeholder="Email"
            />
          </div>
          <div className="contact-form-group">
            <textarea
              className="contact-form-control contact-form__textarea"
              placeholder="Ваше сообщение"
            ></textarea>
          </div>
          <div className="contact-form-group contact-form-group--flex contact-form-group--center">
            <button className="contact-form__button">Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
