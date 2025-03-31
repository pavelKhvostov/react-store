import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [items, setItems] = useState([]);
  const [basketItem, setBasketItem] = useState([]);
  const [isBasket, setIsBsket] = useState(false);
  const [searchItem, setSearchItem] = useState('');
  const [favoriteItem, setFavoriteItem] = useState([]);

  const onChangeSearched = (event) => {
    const value = event.target.value;
    setSearchItem(value);
  };

  const onClickIsBasket = () => {
    setIsBsket(!isBasket);
  };

  const onClickAddFavorite = (obj) => {
    try {
      const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];
      const isItemExist = favoriteItems.some((item) => item.id === obj.id);

      if (isItemExist) {
        return;
      }

      favoriteItems.push(obj);
      localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
      setFavoriteItem(favoriteItems);
    } catch (error) {
      console.error('Ошибка сохранения в localStorage:', error);
    }
  };

  const onClickAddItem = (obj) => {
    try {
      const basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
      const isItemExist = basketItems.some((item) => item.id === obj.id);

      if (isItemExist) {
        return;
      }
      basketItems.push(obj);
      localStorage.setItem('basketItems', JSON.stringify(basketItems));
      setBasketItem(basketItems);
    } catch (error) {
      console.error('Ошибка сохранения в localStorage:', error);
    }
  };

  const onRemoveItem = (id) => {
    const updatedBasket = basketItem.filter((item) => item.id !== id);
    setBasketItem(updatedBasket);
    localStorage.setItem('basketItems', JSON.stringify(updatedBasket)); // Сохранение в localStorage
  };

  useEffect(() => {
    fetch('https://67e0fed158cc6bf78523b9c1.mockapi.io/items')
      .then((res) => res.json())
      .then((res) => setItems(res));
  }, []);

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
    setFavoriteItem(favoriteItems);
  }, []);

  return (
    <div className='wrapper'>
      <Header onClickIsBasket={onClickIsBasket} />
      {isBasket && (
        <Drawer
          isBasket={isBasket}
          basketItems={basketItem}
          onRemoveItem={onRemoveItem}
          onClickIsBasket={onClickIsBasket}
        />
      )}
      <Home
        onClickAddFavorite={onClickAddFavorite}
        basketItems={basketItem}
        onClickAddItem={onClickAddItem}
        items={items}
        onChangeSearched={onChangeSearched}
        searchItem={searchItem}
      />

      <Favorites onClickAddFavorite={onClickAddFavorite} favoriteItem={favoriteItem} />
    </div>
  );
}

export default App;
