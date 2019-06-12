import React from 'react';
import './styles/MobileVersionShoppingCartItem.scss';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../MaterialDesignTheme';

function MobileVersionShoppingCartItem(props){
    const cartItems = props.cartItems.map((item, index) => {
        return <div key={index} className="mobile-shopping-cart-items">
        <div>
            <p>{item.title}</p>
            <img src={require( '../assets/images/' + item.image)}
            alt={item.errorImage}
            className="mobile-shopping-cart-item-img"/>
        </div>
        <div className="mobile-shopping-cart-item">
            <p> Price: {item.totalPrice} €</p>
            <p>{item.price} € x {item.count}</p>
                  <div className="mobile-shopping-cart-item-form-field">
                    <ThemeProvider theme = {theme}>
                    <p> <Icon size="small" variant="contained" color="secondary"
                        onClick={() => props.handleChangeInCartItemsQuantity(item.id, "decrease", index)}>remove_circle</Icon></p>
                            <input type="input" className="mobile-shopping-cart-item-input-field" value={item.count}/> 
                    <p> <Icon size="small" variant="contained" color="primary" 
                        onClick={() => props.handleChangeInCartItemsQuantity(item.id, "increase", index)}>add_circle</Icon></p>
                    </ThemeProvider>
                </div>
        <p><Icon onClick={() => props.deleteShoppingCartItem(item.id, index)}> delete_forever</Icon></p>
        </div>
            <Divider className="divider"/>
    </div>
    })

    if (!props.cartItems.length) {
        return <div className="mobile-shopping-cart-items"> Your cart is empty</div>;
    }
    return (
        <div>
            {cartItems}
        </div>
    );
}

export default MobileVersionShoppingCartItem