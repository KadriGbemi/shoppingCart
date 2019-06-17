import React from 'react';
import './styles/MainVersionShoppingCartItem.scss';
import Icon from '@material-ui/core/Icon';
import {ThemeProvider} from '@material-ui/styles';
import theme from '../MaterialDesignTheme';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function MainVersionShoppingCartItem(props) {
    const cartItems = props.cartItems.map((item, index) => {
            return<div className="main-shopping-cart-item">
            <Grid item xs={12}>
                <div key={index} className="main-shopping-cart-item">
                <Grid item xs={5}>
                <img
                src={props.handleImageError(item.image)}
                alt={item.errorImage}
                className="main-shopping-cart-item-img"/>
                </Grid>
                <Grid item xs={6}>
                <Typography Wrap>
                <h5>{item.title}</h5>
                {item.description}
                </Typography>
                </Grid>
                <Grid item xs={3}>
                <Typography>
                <p>{item.price} x{item.count}</p>
                <p>{item.totalPrice} €</p></Typography>
                </Grid>
                <Grid item xs={3}>
                <div className="main-shopping-cart-item-form-field">
                <ThemeProvider theme={theme}>
                    <p>
                        <Icon
                            size="small"
                            variant="contained"
                            color="secondary"
                            onClick={() => props.handleChangeInCartItemsQuantity(item.id, "decrease", index)}>remove_circle</Icon>
                    </p>
                    <input
                        name={item.title}
                        type="input"
                        min="1"
                        className="main-shopping-cart-item-input-field"
                        onChange={props.updateCartItemsQuantityByInput}
                        value={item.count}/>
                    <p>
                        <Icon
                            size="small"
                            variant="contained"
                            color="primary"
                            onClick={() => props.handleChangeInCartItemsQuantity(item.id, "increase", index)}>add_circle</Icon>
                    </p>
                </ThemeProvider>
            </div>
               </Grid>
               <Grid item xs={1}>
               <Typography>
               <Icon onClick={() => props.deleteShoppingCartItem(item.id, index)}>
               delete_forever</Icon>
               </Typography>
               </Grid>
            </div>
            </Grid>
        </div>

        })

    if (!props.cartItems.length) {
        return <div className="main-shopping-cart-item">
            Your cart is empty</div>;
    }
    return (<div>

        {cartItems}

    </div>);
}

export default MainVersionShoppingCartItem