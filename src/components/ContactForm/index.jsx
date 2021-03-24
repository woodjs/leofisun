/** @format */

import React from 'react';
import './ContactForm.scss';

const ContactForm = () => {
  return (
    <div className='contact'>
      <div className='contact-info'>
        <div className='contact-text'>
          <p className='contact-text__title'>Мои контакты</p>
          <p className='contact-text__subtitle'>и обратная связь</p>
        </div>
        <div className='contact-social'>
          <div className='contact-social__item'>
            <svg className='contact-social__icon' viewBox='0 0 25 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M12.444 21.5108C17.0257 21.5108 20.7399 17.7966 20.7399 13.2149C20.7399 8.63318 17.0257 4.91896 12.444 4.91896C7.86224 4.91896 4.14802 8.63318 4.14802 13.2149C4.14802 17.7966 7.86224 21.5108 12.444 21.5108ZM12.444 23.5848C18.1711 23.5848 22.8139 18.9421 22.8139 13.2149C22.8139 7.48775 18.1711 2.84497 12.444 2.84497C6.71681 2.84497 2.07404 7.48775 2.07404 13.2149C2.07404 18.9421 6.71681 23.5848 12.444 23.5848Z'
                fill='#828282'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M14.2553 19.62C15.0213 18.088 15.555 15.8263 15.555 13.2149C15.555 10.6035 15.0213 8.34183 14.2553 6.80977C13.4272 5.15365 12.667 4.91896 12.444 4.91896C12.221 4.91896 11.4608 5.15365 10.6327 6.80977C9.86667 8.34183 9.33302 10.6035 9.33302 13.2149C9.33302 15.8263 9.86667 18.088 10.6327 19.62C11.4608 21.2761 12.221 21.5108 12.444 21.5108C12.667 21.5108 13.4272 21.2761 14.2553 19.62ZM12.444 23.5848C15.3076 23.5848 17.629 18.9421 17.629 13.2149C17.629 7.48775 15.3076 2.84497 12.444 2.84497C9.58042 2.84497 7.25903 7.48775 7.25903 13.2149C7.25903 18.9421 9.58042 23.5848 12.444 23.5848Z'
                fill='#828282'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M22.7627 14.2519C22.7966 13.9108 22.8139 13.5649 22.8139 13.2149C22.8139 12.8649 22.7966 12.519 22.7627 12.1779H2.12524C2.09137 12.519 2.07404 12.8649 2.07404 13.2149C2.07404 13.5649 2.09137 13.9108 2.12524 14.2519H22.7627Z'
                fill='#828282'
              />
            </svg>

            <p className='contact-social__title'>
              Websites:{' '}
              <a href='#' className='contact-social__link'>
                qcentrum.com / leofisun.com
              </a>
            </p>
          </div>
          {/* /.contact-social__item */}

          <div className='contact-social__item'>
            <svg className='contact-social__icon' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g clip-path='url(#clip0)'>
                <path
                  d='M23.786 17.3671C23.7215 17.2591 23.3225 16.392 21.4024 14.6099C19.3922 12.7438 19.6622 13.0468 22.0834 9.82005C23.558 7.8549 24.1476 6.65481 23.963 6.14178C23.7875 5.65274 22.7029 5.78175 22.7029 5.78175L19.0967 5.80275C19.0967 5.80275 18.8297 5.76675 18.6301 5.88526C18.4366 6.00227 18.3121 6.27229 18.3121 6.27229C18.3121 6.27229 17.7406 7.7934 16.9785 9.0865C15.3719 11.8152 14.7284 11.9592 14.4658 11.7897C13.8553 11.3952 14.0083 10.2026 14.0083 9.35652C14.0083 6.71182 14.4088 5.60924 13.2267 5.32422C12.8337 5.22971 12.5457 5.1667 11.5421 5.1562C10.255 5.1427 9.16445 5.1607 8.5479 5.46223C8.13687 5.66324 7.82035 6.11177 8.01386 6.13728C8.25238 6.16878 8.79242 6.28279 9.07894 6.67282C9.44947 7.17535 9.43597 8.30644 9.43597 8.30644C9.43597 8.30644 9.64899 11.4192 8.93943 11.8062C8.4519 12.0717 7.78435 11.5302 6.35174 9.05349C5.61819 7.7859 5.06315 6.3833 5.06315 6.3833C5.06315 6.3833 4.95664 6.12228 4.76613 5.98277C4.53511 5.81325 4.21108 5.75925 4.21108 5.75925L0.781832 5.78025C0.781832 5.78025 0.267294 5.79525 0.0782796 6.01877C-0.0897328 6.21828 0.0647786 6.62931 0.0647786 6.62931C0.0647786 6.62931 2.74998 12.9103 5.7892 16.077C8.57791 18.9797 11.7431 18.7892 11.7431 18.7892H13.1772C13.1772 18.7892 13.6108 18.7412 13.8313 18.5027C14.0353 18.2837 14.0278 17.8726 14.0278 17.8726C14.0278 17.8726 13.9993 15.948 14.8934 15.6645C15.7739 15.3855 16.905 17.5246 18.1036 18.3482C19.0097 18.9707 19.6982 18.8342 19.6982 18.8342L22.904 18.7892C22.904 18.7892 24.5811 18.6857 23.786 17.3671Z'
                  fill='#828282'
                />
              </g>
              <defs>
                <clipPath id='clip0'>
                  <rect width='24' height='24' fill='white' />
                </clipPath>
              </defs>
            </svg>

            <p className='contact-social__title'>
              Вконтакте:{' '}
              <a href='https://vk.com/leonardo' target='_blank' className='contact-social__link'>
                vk.com/leonardo
              </a>
            </p>
          </div>
          {/* /.contact-social__item */}

          <div className='contact-social__item'>
            <svg className='contact-social__icon' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g clip-path='url(#clip0)'>
                <path
                  d='M9.417 15.181L9.02 20.765C9.588 20.765 9.83399 20.521 10.129 20.228L12.792 17.683L18.31 21.724C19.322 22.288 20.035 21.991 20.308 20.793L23.93 3.82098L23.931 3.81998C24.252 2.32398 23.39 1.73898 22.404 2.10598L1.11399 10.257C-0.339005 10.821 -0.317005 11.631 0.866995 11.998L6.30999 13.691L18.953 5.77998C19.548 5.38598 20.089 5.60398 19.644 5.99798L9.417 15.181Z'
                  fill='#828282'
                />
              </g>
              <defs>
                <clipPath id='clip0'>
                  <rect width='24' height='24' fill='white' />
                </clipPath>
              </defs>
            </svg>

            <p className='contact-social__title'>
              Telegram:{' '}
              <a href='https://t.me/Steklie' target='_blank' className='contact-social__link'>
                @Steklie
              </a>
            </p>
          </div>
          {/* /.contact-social__item */}
        </div>
      </div>
      <form className='contact-form border-gradient'>
        <div className='contact-form__item'>
          <input type='text' className='contact-form__input' placeholder='Имя' required />
          <input type='email' className='contact-form__input' placeholder='Email' required />
        </div>
        <div className='contact-form__item'>
          <textarea className='contact-form__textarea' placeholder='Ваше сообщение'></textarea>
        </div>
        <div className='contact-form__item contact-form__item--center'>
          <button class='btn btn-gold btn-text text-light border-gradient contact-form__btn'>Отправить</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
