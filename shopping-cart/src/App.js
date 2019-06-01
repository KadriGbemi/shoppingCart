import React, {Component} from 'react';


import MobileNavbar from './navbar/mobile-navbar'
import Navbar from './navbar/navbar'
import Cards from './content/cards/Cards';
import AppData from './mockData/data';

import './App.scss';


class App extends Component{
  state = {
    data: AppData,
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MobileNavbar/>
          <Navbar/>
        </header>
        <content className="App-content">
          <Cards shoppingCartData={AppData} />
        </content>
      </div>
    )
  }
}

export default App;
