import React, {Component} from 'react';

import MobileNavbar from './navbar/mobile-navbar'
import DesktopNavbar from './navbar/desktop-navbar';
import Cards from './content/cards/Cards';
import ArrayOfItemsAvailableForSale from './cart/data';
import ShoppingCart from './cart/shopping-cart';

import './App.scss';

class App extends Component {
    state = {
        arrayOfItemsAvailableForSale: ArrayOfItemsAvailableForSale,
        cart: {
            cartItems: [],
            quantity: 0
        },
        shoppingCartIconAnimate: '',
        cartIcon: 'shopping_cart',
        getShoppingCartModal: false
    }
    componentDidUpdate() {
        if(this.state.cart.cartItems  !== undefined) {
            localStorage.setItem('cartItems', JSON.stringify(this.state.cart.cartItems));
        }
      }
    handleImageError = (imgPath, errorImage) => {
        try {
            return (require('./assets/images/' + imgPath));
        } catch (err) {
            return (require('./assets/images/' + errorImage));
        }
    }
    updateCartItemsQuantityByInput = (event) => {
        let {cartItems, quantity} = this.state.cart
        this.setState({
                cart: {
                    cartItems: cartItems.map((item) => {
                        if (item.title === event.target.name) {
                            const quantityWithoutItemCount = quantity - item.count
                            item.count = Number(event.target.value)
                            quantity = quantityWithoutItemCount + item.count
                            item.totalPrice = Math.round((item.price * item.count));
                        }
                        return item
                    }),
                    quantity: quantity
                }
            })
    }
    addShoppingCartItem = (cartItem) => {
        const {cartItems, quantity} = this.state.cart
        const addedCartItem = {
            ...cartItem,
            "count": 0,
            "totalPrice": 0
        }
        this.setState({
            cart: {
                cartItems: [...new Set(
                        cartItems.concat(this.countShoppingCartItem(addedCartItem, cartItems.concat([addedCartItem])))
                    )],
                quantity: (Number(quantity) + 1)
            },
            shoppingCartIconAnimate: "bounce animated",
            cartIcon: 'add_shopping_cart'
        })
    }
    countShoppingCartItem = (addedCartItem, cartItems) => {
        return cartItems.filter((item) => {
                if (addedCartItem.id === item.id) {
                    item.count += 1;
                    item.quantity = cartItems.length
                    item.totalPrice = item.price * item.count;
                }
                return addedCartItem.id === item.id;
            })
            .slice(0, 1); //Get shopping cart array with highest count by array order
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
                                item.totalPrice = Math.round((item.price * item.count));

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
                                    item.totalPrice = Math.round((item.price * item.count));
                                }
                            }
                            return item;
                        }),
                        quantity: quantity - 1
                    }
                })
                break;
            default:
                console.log("default")
                break;
        }
    }
    deleteShoppingCartItem = (cartItemId, index) => {
        const {cartItems, quantity} = this.state.cart
            this.setState({
                cart: {
                    cartItems: cartItems.filter((item) => {
                        return item.id !== cartItemId
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
                        icon={this.state.cartIcon}/>
                    <DesktopNavbar
                        handleShoppingCartClickOpen={this.handleShoppingCartDisplay}
                        quantity={this.state.cart.quantity}
                        shoppingCartIconAnimate={this.state.shoppingCartIconAnimate}
                        icon={this.state.cartIcon}/>
                </header>
                <ShoppingCart
                    openShoppingCart={this.state.getShoppingCartModal}
                    onClose={this.handleShoppingCartDisplay}
                    arrayOfShoppingCartItems={this.state.cart.cartItems}
                    handleChangeInCartItemsQuantity={this.updateCartItemsQuantityOnClick}
                    updateCartItemsQuantityByInput={this.updateCartItemsQuantityByInput}
                    deleteShoppingCartItem={this.deleteShoppingCartItem}
                    handleImageError={this.handleImageError}/>
                <div className="App-content">
                    <Cards
                        handleImageError={this.handleImageError}
                        itemsAvailableForSale={this.state.arrayOfItemsAvailableForSale}
                        addShoppingCartItem={this.addShoppingCartItem}/>
                </div>
            </div>
        )
    }
}

export default App;
