import React from 'react';
import './styles/Mobile-navbar.scss';
import Icon from '@material-ui/core/Icon';
import Badge from '@material-ui/core/Badge';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../MaterialDesignTheme';



function MobileNavigationBar(props){
    return(
       <div className="App-header-mobile">
        <div className="App-header-mobile-nav-bar">
        <div className="App-header-mobile-icon">
            <span><Icon>menu</Icon> Menu</span>
        </div>

        <ThemeProvider theme={theme}>
        <Badge badgeContent={props.quantity} color="secondary">
            <div className="App-header-mobile-icon"  onClick={props.handleShoppingCartClickOpen}>
            <div className="App-header-main-shopping-cart" >
                <span className={props.shoppingCartIconAnimate}><Icon>{props.icon}</Icon></span>CART
            </div>
            </div>
            </Badge>
        </ThemeProvider>

        </div>
        <h3 className="App-header-mobile-title">SHOEMARKET</h3>
       </div>
    );

}

export default MobileNavigationBar