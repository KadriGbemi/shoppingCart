import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './styles/MobileVersionShoppingCartItem.scss';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';
import { ThemeProvider } from '@material-ui/styles';
import useStyles from '../MaterialDesignStyle';
import theme from '../MaterialDesignTheme';

function MobileVersionShoppingCartItem(props){
    const classes =  useStyles();
    const cartItem = props.cartItems.map((item, index) => {
        return <div
        className="mobile-shopping-cart-item"
        key={index}>
        <h2> Cart items:</h2>
        <img src={require( '../assets/images/' + item.image)}
        alt={item.errorImage}
        className="mobile-shopping-cart-item-img"/>
        <p> {item.title}</p>
        <h2> {item.totalPrice} €</h2>
         <h2>{item.price} € x {item.count}</h2>
            <div>
            <ThemeProvider theme = {theme}>
                <Button size="small" variant="contained" color="secondary"
                className={classes.buttons}
                onClick={() => props.handleChangeInCartItemsQuantity(item.id, "decrease")}>-</Button>
                <TextField
                   id="outlined-bare"
                    value={item.count}
                    variant="outlined"
                    className={classes.input}
                />
                <Button size="small" variant="contained" color="primary" className={classes.buttons}
                onClick={() => props.handleChangeInCartItemsQuantity(item.id, "increase")}>+</Button>
            </ThemeProvider>
            </div>
            <CloseIcon onClick={() => props.deleteShoppingCartItem(item.id)}/>
            <Divider className="divider"/>
        </div>
    })

    return (
        <div>
            {cartItem}
        </div>
    );
}

export default MobileVersionShoppingCartItem