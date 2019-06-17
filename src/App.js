import React, {Component} from 'react';

import MobileNavbar from './navbar/mobile-navbar'
import Navbar from './navbar/navbar';
import Cards from './content/cards/Cards';
import AppData from './mockData/data';
import ShoppingCart from './cart/ShoppingCart';

import './App.scss';

class App extends Component {
    state = {
        data: AppData,
        cart: {
            cartItems: [],
            quantity: 0,
        },
        shoppingCartIconAnimate: '',
        icon: 'shopping_cart',
        getShoppingCartModal: false
    }
    handleImageError =(imgPath)=>{
        try {
          return (require('./assets/images/' + imgPath));
         } catch (err) {
        //   console.log('Path has Error', err);
            return (require('./assets/images/default-error-image-for-item.jpg'));
         }
    }
    updateCartItemsQuantityByInput=(e)=> {
        let {cartItems, quantity} = this.state.cart
        this.setState({
            cart: {
                cartItems: cartItems.map((item) => {
                    if(item.title === e.target.name) {
                        const quantityValue = quantity - item.count
                        item.count = Number(e.target.value);
                        quantity = quantityValue + item.count
                        console.log(quantity)
                        item.totalPrice = (item.price * item.count).toFixed(2);
                    }
                    return item
                }),
            quantity: quantity
            }
        })
      }
    addItems = (item) => {
        const {cartItems, quantity} = this.state.cart
        const items = {
            ...item,
            "count": 0,
            "totalPrice": 0
        }
        this.setState({
            cart: {
                cartItems: [...new Set(
                        cartItems.concat(this.getCartItems(items, cartItems.concat([items])))
                    )],
                quantity: (Number(quantity) + 1)
            },
            shoppingCartIconAnimate: "bounce animated",
            icon: 'add_shopping_cart'
        })
    }
    getCartItems = (items, cartItems) => {
        return cartItems
            .filter((item) => {
                if (items.id === item.id) {
                    item.count += 1;
                    item.quantity = cartItems.length
                    item.totalPrice = item.price * item.count;
                }
                return items.id === item.id;
            })
            .slice(0, 1); //Get array with highest count by array order
    }
    updateCartItemsQuantityOnClick = (itemIdentifier, change) => {
        let {cartItems, quantity} = this.state.cart

        switch (change) {
            case "increase": //increase cart items quantity
                this.setState({
                    cart: {
                        cartItems: cartItems.map((item) => {
                            if (item.id === itemIdentifier) {
                                item.count += 1;
                                item.totalPrice = (item.price * item.count).toFixed(2);

                            }
                            return item
                        }),
                        quantity: quantity + 1
                    }
                })
                break;
            case "decrease": //decrease cart items quantity
                this.setState({
                    cart: {
                        cartItems: cartItems.filter((item) => {
                            if (item.id === itemIdentifier) {
                                if (item.count === 0 || null) {
                                    quantity += 1;
                                    return item.id !== itemIdentifier
                                } else {
                                    item.count -= 1;
                                    item.totalPrice = (item.price * item.count).toFixed(2);
                                }
                            }
                            return item;
                        }),
                        quantity: quantity - 1
                    }
                })
                break;
            default:
                console.log("Handle change")
                break;
        }
    }
    deleteShoppingCartItem = (itemIdentifier, index) => {
        const {cartItems, quantity} = this.state.cart
            this.setState({
                cart: {
                    cartItems: cartItems.filter((item) => {
                        return item.id !== itemIdentifier
                    }),
                    quantity: quantity - cartItems[index].count
                }
            })
    }
    handleShoppingCartDisplay = (e) => {
        e.stopPropagation(e);
        this.setState((state) => ({
            getShoppingCartModal: !state.getShoppingCartModal
        }));
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <MobileNavbar
                        handleShoppingCartClickOpen={this.handleShoppingCartDisplay}
                        quantity={this.state.cart.quantity}
                        shoppingCartIconAnimate={this.state.shoppingCartIconAnimate}
                        icon={this.state.icon}/>
                    <Navbar
                        handleShoppingCartClickOpen={this.handleShoppingCartDisplay}
                        quantity={this.state.cart.quantity}
                        shoppingCartIconAnimate={this.state.shoppingCartIconAnimate}
                        icon={this.state.icon}/>
                </header>
                <ShoppingCart
                    openShoppingCart={this.state.getShoppingCartModal}
                    onClose={this.handleShoppingCartDisplay}
                    cartItemsArray={this.state.cart.cartItems}
                    handleChangeInCartItemsQuantity={this.updateCartItemsQuantityOnClick}
                    updateCartItemsQuantityByInput = {this.updateCartItemsQuantityByInput}
                    deleteShoppingCartItem={this.deleteShoppingCartItem}
                    handleImageError = {this.handleImageError}
                    />
                <div className="App-content">
                    <Cards
                    handleImageError = {this.handleImageError}
                    shoppingCartData={this.state.data} addItems={this.addItems}/>
                </div>
            </div>
        )
    }
}

export default App;
