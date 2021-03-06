import React from 'react';

import Icon from '@material-ui/core/Icon';
import {ThemeProvider} from '@material-ui/styles';
import theme from '../../MaterialDesignTheme';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import '../styles/desktop-cart-items.scss';

function DesktopCartItems(props) {
    const shoppingCartItems = props.arrayOfShoppingCartItems.map((cartItem, index) => {
            return <div key={index} className="main-shopping-cart-items">
                <Grid container spacing={1}>
                    <Grid item sm={3}>
                        <img
                            src={props.handleImageError(cartItem.image, cartItem.errorImage)}
                            alt={cartItem.errorImage}
                            className="main-shopping-cart-item-img"/>
                    </Grid>
                    <Grid item sm={4}>
                        <h4 className="App-primary-text">
                            {cartItem.title}</h4>
                        <p className="App-secondary-text">
                            {cartItem.description}
                        </p>
                    </Grid>
                    <Grid item sm={2}>
                        <p className="App-secondary-text">{cartItem.price}
                            x{cartItem.count}</p>
                        <h4 className="App-primary-text">{cartItem.totalPrice}
                            €</h4>
                    </Grid>
                    <Grid item >
                        <div className="shopping-cart-item-form-field">
                            <ThemeProvider theme={theme}>
                                <p>
                                    <Icon
                                        size="small"
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => props.handleChangeInCartItemsQuantity(cartItem.id, "decrease", index)}>remove_circle</Icon>
                                </p>
                                <input
                                    name={cartItem.title}
                                    type="number"
                                    min="0"
                                    className="shopping-cart-item-input-field"
                                    onChange={props.updateCartItemsQuantityByInput}
                                    value={cartItem.count}/>
                                <p>
                                    <Icon
                                        size="small"
                                        variant="contained"
                                        color="primary"
                                        onClick={() => props.handleChangeInCartItemsQuantity(cartItem.id, "increase", index)}>add_circle</Icon>
                                </p>
                            </ThemeProvider>
                        </div>
                    </Grid>
                    <Grid item>
                        <p>
                            <Icon onClick={() => props.deleteShoppingCartItem(cartItem.id, index)}>
                                delete_forever</Icon>
                        </p>
                    </Grid>
                </Grid>
            </div>
        })

    if (!props.arrayOfShoppingCartItems.length) {
        return <div className="main-shopping-cart-items">
            <Typography variant="body1" gutterBottom>
                Your cart is empty
            </Typography>
        </div>;
    }
    return (<div>{shoppingCartItems}
    </div>);
}

export default DesktopCartItems