// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
// import Sidebar from './components/sidebar';
import Home from './pages/home';

const App = () => {
  // useEffect(() => {
  //   document.body.style.backgroundColor = "#f0f0f0"; // ganti dengan warna yang kamu inginkan
  // }, []);

  return (
    <div className='app'>
      <Home />
      {/* <div style={{ flex: 1, padding: '20px' }}>
      </div> */}
    </div>
  );
};

export default App;