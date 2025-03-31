import React, { useState } from 'react';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';

function App() {
  const [items, setItems] = useState([]);

  React.useEffect(() => {
    const respons = fetch('https://67e0fed158cc6bf78523b9c1.mockapi.io/items');
    respons
      .then((res) => {
        const data = res.json();
        return data;
      })
      .then((res) => setItems(res));
  }, []);

  return (
    <div className='wrapper'>
      <Header />

      <Drawer />

      <Home items={items} />
    </div>
  );
}

export default App;
