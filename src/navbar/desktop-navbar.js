import React from 'react';
import './styles/desktop-navbar.scss';
import Icon from '@material-ui/core/Icon';
import Badge from '@material-ui/core/Badge';
import {ThemeProvider} from '@material-ui/styles';
import theme from '../MaterialDesignTheme';

function DesktopNavbar(props) {
    return (
        <div className="App-desktop-nav-bar">
            <h3>SHOEMARKET</h3>
            <div className="App-desktop-nav-bar-shopping-cart">
                <ThemeProvider theme={theme}>
                    <Badge badgeContent={props.quantity} color="secondary">
                        <div
                            className="App-desktop-nav-bar-shopping-cart-icon"
                            onClick={props.handleShoppingCartClickOpen}>
                            <span className={props.shoppingCartIconAnimate}>
                                <Icon>{props.icon}</Icon>
                            </span>CART
                        </div>
                    </Badge>
                </ThemeProvider>
            </div>
        </div>
    );

}

export default DesktopNavbar