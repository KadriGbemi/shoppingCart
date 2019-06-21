import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import {ThemeProvider} from '@material-ui/styles';
import theme from '../../MaterialDesignTheme';

import '../styles/mobile-cart-items.scss';

function MobileCartItems(props) {
    const cartItems = props.cartItems.map((cartItem, index) => {
            return <div key={index} className="mobile-shopping-cart-items">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography>
                            {cartItem.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>
                            <img
                                src={props.handleImageError(cartItem.image)}
                                alt={cartItem.errorImage}
                                className="mobile-shopping-cart-item-img"/>
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>{cartItem.price}
                            x{cartItem.count}</Typography>
                        <Typography variant="h5" gutterBottom>{cartItem.totalPrice}
                            €
                        </Typography>
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
                        <Typography>
                            <Icon onClick={() => props.deleteShoppingCartItem(cartItem.id, index)}>
                                delete_forever</Icon>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        })

    if (!props.cartItems.length) {
        return <div className="mobile-shopping-cart-items">
            <Typography variant="body1" gutterBottom>
                Your cart is empty
            </Typography>
        </div>;
    }
    return (<div>{cartItems}</div>);
}

export default MobileCartItems