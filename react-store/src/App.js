import React from 'react';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';

function App() {
  return (
    <div className='wrapper clear'>
      <Drawer />

      <Header />

      <Home />
    </div>
  );
}

export default App;
