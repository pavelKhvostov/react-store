import React from 'react';
import Card from '../components/Card';

const Home = ({
  items,
  searchItem,
  onClickAddItem,
  onChangeSearched,
  onClickAddFavorite,
  isLoading,
}) => {
  const renderItems = () => {
    const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchItem));

    return (isLoading ? [...Array(8)] : filteredItems).map((obj, index) => (
      <Card
        key={isLoading ? index : obj.id}
        onClickAddFavorite={onClickAddFavorite}
        searchItem={searchItem}
        onChangeSearched={onChangeSearched}
        onClickAddItem={onClickAddItem}
        isLoading={isLoading}
        {...obj}
      />
    ));
  };
  return (
    <div className='content'>
      <div className='container'>
        <div className='content__wrap'>
          <h2 className='content__title'>
            {searchItem ? `Поиск по запросу: ${searchItem}` : 'Все кроссовки'}
          </h2>
          <input
            onChange={onChangeSearched}
            type='text'
            className='content__input'
            placeholder='Поиск...'
          />
        </div>
        <div className='wrapper__inner'>{renderItems()}</div>
      </div>
    </div>
  );
};

export default Home;
