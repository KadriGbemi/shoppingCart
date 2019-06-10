import React from 'react';
import './styles/Navbar.scss';
import Icon from '@material-ui/core/Icon';
import Badge from '@material-ui/core/Badge';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../MaterialDesignTheme';

function NavigationBar(props){
    return(
      <div className="App-header-main-nav-bar">
        <h3 className="App-header-main-cart-title">SHOEMARKET</h3>
        <div className="App-header-main-cart">
          <ThemeProvider theme={theme}>
            <Badge badgeContent={props.quantity} color="secondary">
                <div className="App-header-main-shopping-cart" onClick={props.handleShoppingCartClickOpen}>
                  <span className={props.shoppingCartIconAnimate}><Icon>{props.icon}</Icon></span>CART
                </div>
              </Badge>
          </ThemeProvider>
        </div>
    </div>
    );

}

export default NavigationBar