import React from 'react';
import './styles/mobile-navbar.scss';
import Icon from '@material-ui/core/Icon';

function MobileNavigationBar(){
    return(
       <div className="App-header-mobile">
        <div className="App-header-mobile-nav-bar">
        <div className="App-header-mobile-icon">
            <span><Icon>menu</Icon></span>Menu
        </div>
        <div className="App-header-mobile-icon">
            <span><Icon>shopping_cart</Icon></span>Cart
        </div>
        </div>
        <h3 className="App-header-mobile-title">SHOEMARKET</h3>
       </div>
    );

}

export default MobileNavigationBar