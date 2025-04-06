import { useState } from 'react';
import ContentLoader from 'react-content-loader';

const Card = ({
  id,
  imageUrl,
  isLoading,
  title,
  price,
  onClickAddItem,
  onClickAddFavorite,
  fovarited = false,
}) => {
  const handleClick = () => {
    const item = { id, imageUrl, title, price };
    onClickAddItem(item); // Передаем объект карточки
  };

  const handleClickFavorite = () => {
    oncLickFavotite();
    const item = { id, imageUrl, title, price };
    onClickAddFavorite(item);
  };

  const [isFavorite, setIsFavorite] = useState(fovarited);

  const oncLickFavotite = () => {
    setIsFavorite(!isFavorite);
  };

  console.log(isLoading);

  return (
    <div className='card'>
      {isLoading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={187}
          viewBox='0 0 150 187'
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'
        >
          <rect x='-1' y='0' rx='8' ry='8' width='150' height='90' />
          <rect x='6' y='124' rx='0' ry='0' width='1' height='0' />
          <rect x='0' y='100' rx='9' ry='9' width='150' height='15' />
          <rect x='0' y='120' rx='9' ry='9' width='75' height='15' />
          <rect x='0' y='160' rx='9' ry='9' width='80' height='24' />
          <rect x='118' y='151' rx='9' ry='9' width='32' height='32' />
        </ContentLoader>
      ) : (
        <>
          {onClickAddFavorite && (
            <button
              onClick={handleClickFavorite}
              className={isFavorite ? 'btn card__favorite--active' : 'btn card__favorite'}
            >
              <svg
                className=' card__icon-favorite'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M13.8609 3.07455C13.5204 2.73389 13.1161 2.46365 12.6711 2.27927C12.2261 2.0949 11.7492 2 11.2675 2C10.7859 2 10.3089 2.0949 9.86396 2.27927C9.41898 2.46365 9.0147 2.73389 8.67419 3.07455L7.96753 3.78122L7.26086 3.07455C6.57307 2.38676 5.64022 2.00036 4.66753 2.00036C3.69484 2.00036 2.76199 2.38676 2.07419 3.07455C1.3864 3.76235 1 4.69519 1 5.66788C1 6.64057 1.3864 7.57342 2.07419 8.26122L2.78086 8.96788L7.96753 14.1546L13.1542 8.96788L13.8609 8.26122C14.2015 7.92071 14.4718 7.51643 14.6561 7.07145C14.8405 6.62648 14.9354 6.14954 14.9354 5.66788C14.9354 5.18623 14.8405 4.70929 14.6561 4.26431C14.4718 3.81934 14.2015 3.41505 13.8609 3.07455Z'
                  stroke='#EAEAEA'
                  strokeWidth='1.2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          )}

          <img className='card__img' src={imageUrl} alt='Кроссовок' />
          <h2 className='card__title'>{title}</h2>
          <div className='card__wrap-event'>
            <div className='card__inner'>
              <span className='card__text'>Цена:</span>
              <span className='card__price'>{price} Р</span>
            </div>
            {onClickAddItem && (
              <button onClick={handleClick} className='btn'>
                <svg
                  className='card__icon-plus'
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
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
