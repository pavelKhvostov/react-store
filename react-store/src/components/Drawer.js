const Drawer = ({ isBasket, basketItems, onRemoveItem, onClickIsBasket }) => {
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
        <div className='drawer__mid'>
          {basketItems.length > 0 ? (
            basketItems.map((item, index) => (
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
            ))
          ) : (
            <div className='drawer__empty'>
              <p>Корзина пуста</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
