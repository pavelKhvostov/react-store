import Card from '../components/Card';

const Favorites = ({ favoriteItem, onClickAddFavorite, onClickAddItem }) => {
  return (
    <div className='content'>
      <div className='container'>
        <h2 className='content__title'>Мои закладки</h2>
        <div className='wrapper__inner'>
          {favoriteItem.map((obj) => (
            <Card
              key={obj.id}
              onClickAddFavorite={onClickAddFavorite}
              onClickAddItem={onClickAddItem}
              fovarited={true}
              {...obj}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
