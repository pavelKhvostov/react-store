import React from 'react';
import Card from '../components/Card';

const Home = ({ items, searchItem, onClickAddItem, onChangeSearched, onClickAddFavorite }) => {
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
        <div className='wrapper__inner'>
          {items
            .filter((item) => item.title.toLowerCase().includes(searchItem))
            .map((obj) => (
              <Card
                key={obj.id}
                onClickAddFavorite={onClickAddFavorite}
                searchItem={searchItem}
                onChangeSearched={onChangeSearched}
                onClickAddItem={onClickAddItem}
                {...obj}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
