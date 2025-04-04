import React from 'react';

function Info({ title, par, imgUrl, onClickIsBasket }) {
  return (
    <div className='drawer__empty'>
      <img src={imgUrl} alt='пустая коробка' />
      <p className='drawer__decr'>{title}</p>
      <span className='drawer__text'>{par}</span>
      <button onClick={() => onClickIsBasket()} className='drawer__btn drawer__btn-empty'>
        <svg
          className='drawer__empty-btn-arrow'
          width='16'
          height='14'
          viewBox='0 0 16 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1 7H14.7143'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M8.71436 1L14.7144 7L8.71436 13'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <span className='drawer__btn-text'> Вернуться назад </span>
      </button>
    </div>
  );
}

export default Info;
