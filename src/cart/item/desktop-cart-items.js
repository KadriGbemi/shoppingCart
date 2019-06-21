import React from 'react';

import Icon from '@material-ui/core/Icon';
import {ThemeProvider} from '@material-ui/styles';
import theme from '../../MaterialDesignTheme';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import '../styles/desktop-cart-items.scss';

function DesktopCartItems(props) {
    const cartItems = props.cartItems.map((cartItem, index) => {
            return <div key={index} className="main-shopping-cart-items">
                <Grid container spacing={2}>
                    <Grid item sm={3}>
                        <img
                            src={props.handleImageError(cartItem.image)}
                            alt={cartItem.errorImage}
                            className="main-shopping-cart-item-img"/>
                    </Grid>
                    <Grid item sm={4}>
                        <Typography variant="h5" gutterBottom>
                            {cartItem.title}</Typography>
                        <Typography variant="body2" gutterBottom>
                            {cartItem.description}
                        </Typography>
                    </Grid>
                    <Grid item sm={2}>
                        <Typography>{cartItem.price}
                            x{cartItem.count}</Typography>
                        <Typography variant="h5" gutterBottom>{cartItem.totalPrice}
                            €</Typography>
                    </Grid>
                    <Grid item>
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

    if (!props.cartItems.length) {
        return <div className="main-shopping-cart-items">
            <Typography variant="body1" gutterBottom>
                Your cart is empty
            </Typography>
        </div>;
    }
    return (<div>{cartItems}
    </div>);
}

export default DesktopCartItems