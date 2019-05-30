import React from 'react';
import './styles/navbar.scss';
import Icon from '@material-ui/core/Icon';
import Badge from '@material-ui/core/Badge';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    secondary: { main: '#FF4500'}, // Color is red orange.
  },
});

function NavigationBar(){
    return(
      <div className="App-header-main-nav-bar">
        <h3 className="App-header-main-cart-title">SHOEMARKET</h3>
        <div className="App-header-main-cart">
          <ThemeProvider theme={theme}>
            <Badge badgeContent={11} color="secondary">
                <div className="App-header-main-shopping-cart">
                  <span><Icon>shopping_cart</Icon></span>CART
                </div>
              </Badge>
          </ThemeProvider>
        </div>
    </div>
    );

}

export default NavigationBar