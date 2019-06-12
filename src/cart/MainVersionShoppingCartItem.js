import React from 'react';
import './styles/MainVersionShoppingCartItem.scss';
import Icon from '@material-ui/core/Icon';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../MaterialDesignTheme';

function MainVersionShoppingCartItem(props){
     const cartItems = props.cartItems.map((item, index) => {
         return <div key={index} className="main-shopping-cart-item">
            <div className="main-shopping-cart-item-column">
                <div>  
                <img src={require( '../assets/images/' + item.image)}
                    alt={item.errorImage}
                     className="main-shopping-cart-item-img"/></div>
            </div>
            <div className="main-shopping-cart-item-column">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            </div>
            <div className="main-shopping-cart-item-column">
                <h3>Quantity</h3>
                 <div className="main-shopping-cart-item-form-field">
                    <ThemeProvider theme = {theme}>
                    <p> <Icon size="small" variant="contained" color="secondary"
                        onClick={() => props.handleChangeInCartItemsQuantity(item.id, "decrease", index)}>remove_circle</Icon></p>
                            <input type="input" className="main-shopping-cart-item-input-field" value={item.count}/> 
                    <p> <Icon size="small" variant="contained" color="primary" 
                        onClick={() => props.handleChangeInCartItemsQuantity(item.id, "increase", index)}>add_circle</Icon></p>
                    </ThemeProvider>
                </div>
            </div>
            <div className="main-shopping-cart-item-column">
              <h3>Total</h3>
                <p>{item.price}€ x {item.count}</p>
                <p> {item.totalPrice} €</p>
            </div>
         </div>
     })
    
    if (!props.cartItems.length) {
        return <div className="main-shopping-cart-item"> Your cart is empty</div>;
    }
    return (
        <div>
        {cartItems}
        </div>
    );
}

export default MainVersionShoppingCartItem