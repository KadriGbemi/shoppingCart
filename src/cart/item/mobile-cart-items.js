import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import {ThemeProvider} from '@material-ui/styles';
import theme from '../../MaterialDesignTheme';

import '../styles/mobile-cart-items.scss';

function MobileCartItems(props) {
    const shoppingCartItems = props
        .arrayOfShoppingCartItems
        .map((cartItem, index) => {
            return <div key={index} className="mobile-shopping-cart-items">
                <Grid container="container" spacing={3}>
                    <Grid item="item" xs={12}>
                        <h4 className="App-primary-text">
                            {cartItem.title}
                        </h4>
                    </Grid>
                    <Grid item="item" xs={6}>
                        <Typography>
                            <img
                                src={props.handleImageError(cartItem.image, cartItem.errorImage)}
                                alt={cartItem.errorImage}
                                className="mobile-shopping-cart-item-img"/>
                        </Typography>
                    </Grid>
                    <Grid item="item" xs={6}>
                        <p className="App-secondary-text">{cartItem.price} x {cartItem.count}</p>
                        <h4 className="App-primary-text">{cartItem.totalPrice} €</h4>
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
                        <Typography>
                            <Icon onClick={() => props.deleteShoppingCartItem(cartItem.id, index)}>
                                delete_forever</Icon>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        })

    if (!props.arrayOfShoppingCartItems.length) {
        return <div className="mobile-shopping-cart-items">
            <Typography variant="body1" gutterBottom="gutterBottom">
                Your cart is empty
            </Typography>
        </div>;
    }
    return (<div>{shoppingCartItems}</div>);
}

export default MobileCartItems