import React from 'react';
import './styles/mobile-navbar.scss';
import Icon from '@material-ui/core/Icon';
import Badge from '@material-ui/core/Badge';
import {ThemeProvider} from '@material-ui/styles';
import theme from '../MaterialDesignTheme';

function MobileNavigationBar(props) {
    return (
        <div className="App-mobile-nav-bar">
            <div className="App-mobile-nav-bar-header">
                <div className="App-mobile-nav-bar-icon">
                    <span>
                        <Icon>menu</Icon>
                        Menu</span>
                </div>

                <ThemeProvider theme={theme}>
                    <Badge badgeContent={props.quantity} color="secondary">
                        <div
                            className="App-mobile-nav-bar-icon"
                            onClick={props.handleShoppingCartClickOpen}>
                            <div className="App-mobile-nav-bar-shopping-cart-icon">
                                <span className={props.shoppingCartIconAnimate}>
                                    <Icon>{props.icon}</Icon>
                                </span>CART
                            </div>
                        </div>
                    </Badge>
                </ThemeProvider>

            </div>
            <h3 className="App-mobile-nav-bar-title">SHOEMARKET</h3>
        </div>
    );

}

export default MobileNavigationBar