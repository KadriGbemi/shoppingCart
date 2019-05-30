import React from 'react';
import './App.scss';
import MobileNavbar from './navbar/mobile-navbar'
import Navbar from './navbar/navbar'
import AppCards from './content/cards/Cards';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MobileNavbar/>
        <Navbar/>
      </header>
      <content className="App-content">
        <AppCards/>
      </content>
    </div>
  );
}

export default App;
