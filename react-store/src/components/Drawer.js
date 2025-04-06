import Info from './Info';

const Drawer = ({ isBasket, basketItems, onRemoveItem, onClickIsBasket, onClickAddOrder }) => {
  const totalPrice = basketItems.reduce((sum, obj) => {
    return obj.price + sum;
  }, 0);

  return (
    <div className={isBasket ? 'overley--active' : 'ovarley'}>
      <div className='drawer'>
        <div className='drawer__top'>
          <h2 className='drawer__heading'>Корзина</h2>
          <button onClick={() => onClickIsBasket()} className='btn'>
            <svg
              className='drawer__icon-close'
              width='12'
              height='12'
              viewBox='0 0 12 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z'
                fill='#D3D3D3'
              />
            </svg>
          </button>
        </div>

        {basketItems.length === 0 ? (
          <Info
            title='Корзина пуста'
            par='Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            imgUrl='img/empty.jpg'
            onClickIsBasket={onClickIsBasket}
          />
        ) : (
          <>
            <div className='drawer__mid'>
              {basketItems.map((item, index) => (
                <div className='drawer__wrap' key={index}>
                  <img className='drawer__img' src={item.imageUrl} alt={item.title} />
                  <div className='drawer__inner'>
                    <h2 className='drawer__title'>{item.title}</h2>
                    <span className='drawer__price'>{item.price} P</span>
                  </div>
                  <button onClick={() => onRemoveItem(item.id)} className='btn'>
                    <svg
                      className='drawer__icon-close'
                      width='12'
                      height='12'
                      viewBox='0 0 12 12'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z'
                        fill='#D3D3D3'
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            <div className='drawer__down'>
              <div className='drawer__price-inner'>
                <span className='drawer__item-text'>Итого: </span>
                <span className='drawer__item-line'></span>
                <span className='drawer__item-price'>{totalPrice} руб.</span>
              </div>
              <div className='drawer__price-inner'>
                <span className='drawer__item-text'>Налог 5%: </span>
                <span className='drawer__item-line'></span>
                <span className='drawer__item-price'>1074 руб.</span>
              </div>
              <button onClick={() => onClickAddOrder(basketItems)} className='drawer__btn'>
                <span className='drawer__btn-text'>Оформить заказ </span>
                <svg
                  className='drawer__btn-arrow'
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
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Drawer;
