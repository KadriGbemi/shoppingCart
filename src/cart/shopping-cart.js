import React, {Component} from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Fab from "@material-ui/core/Fab";
import CloseIcon from '@material-ui/icons/Close';
import {ThemeProvider} from '@material-ui/styles';
import theme from '../MaterialDesignTheme';
import withMobileDialog from '@material-ui/core/withMobileDialog';

import MobileCartItems from './item/mobile-cart-items';
import DesktopCartItems from './item/desktop-cart-items';

import './styles/shopping-cart.scss';

class ShoppingCart extends Component {
    render() {
        const {
            arrayOfShoppingCartItems,
            handleChangeInCartItemsQuantity,
            onClose,
            openShoppingCart,
            deleteShoppingCartItem,
            handleImageError,
            updateCartItemsQuantityByInput
        } = this.props
        if (!openShoppingCart) {
            return null;
        }
        return (
            <div>
                <Dialog
                    open={openShoppingCart}
                    onClose={onClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description">

                    <header className="shopping-cart-header">
                        <DialogTitle id="alert-dialog-slide-title" className="App-primary-text">
                            {"Your Cart"}
                        </DialogTitle>

                        <DialogActions onClick={onClose}>
                            <ThemeProvider theme={theme}>
                                <Fab size="small" color="primary" aria-label="Close">
                                    <CloseIcon/>
                                </Fab>
                            </ThemeProvider>
                        </DialogActions>
                    </header>
                    <DialogContent>
                        <MobileCartItems
                            arrayOfShoppingCartItems={arrayOfShoppingCartItems}
                            handleChangeInCartItemsQuantity={handleChangeInCartItemsQuantity}
                            deleteShoppingCartItem={deleteShoppingCartItem}
                            handleImageError={handleImageError}
                            updateCartItemsQuantityByInput={updateCartItemsQuantityByInput}/>

                        <DesktopCartItems
                            arrayOfShoppingCartItems={arrayOfShoppingCartItems}
                            handleChangeInCartItemsQuantity={handleChangeInCartItemsQuantity}
                            deleteShoppingCartItem={deleteShoppingCartItem}
                            handleImageError={handleImageError}
                            updateCartItemsQuantityByInput={updateCartItemsQuantityByInput}/>
                    </DialogContent>
                    <DialogActions>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" size="medium" onClick={onClose} color="primary">
                                Back
                            </Button>
                            <Button variant="contained" size="medium" onClick={onClose} color="primary">
                                Checkout
                            </Button>
                        </ThemeProvider>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default withMobileDialog({breakpoint: 'xs'})(ShoppingCart);