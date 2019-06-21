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
import Typography from '@material-ui/core/Typography';

import MobileCartItems from './item/mobile-cart-items';
import DesktopCartItems from './item/desktop-cart-items';

import './styles/shopping-cart.scss';

class ShoppingCart extends Component {
    render() {
        const {
            cartItemsArray,
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
                        <DialogTitle id="alert-dialog-slide-title">
                            <Typography variant="h6" gutterBottom>
                            {"Your Cart"}
                            </Typography>
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
                            cartItems={cartItemsArray}
                            handleChangeInCartItemsQuantity={handleChangeInCartItemsQuantity}
                            deleteShoppingCartItem={deleteShoppingCartItem}
                            handleImageError={handleImageError}
                            updateCartItemsQuantityByInput={updateCartItemsQuantityByInput}/>

                        <DesktopCartItems
                            cartItems={cartItemsArray}
                            handleChangeInCartItemsQuantity={handleChangeInCartItemsQuantity}
                            deleteShoppingCartItem={deleteShoppingCartItem}
                            handleImageError={handleImageError}
                            updateCartItemsQuantityByInput={updateCartItemsQuantityByInput}/>

                    </DialogContent>
                    <ThemeProvider theme={theme}>
                    <DialogActions>
                            <Button variant="contained" size="medium" onClick={onClose} color="primary">
                                Back
                            </Button>
                            <Button variant="contained" size="medium" onClick={onClose} color="primary">
                                Checkout
                            </Button>
                    </DialogActions>
                    </ThemeProvider>
                </Dialog>
            </div>
        )
    }
}

export default withMobileDialog({breakpoint: 'xs'}) (ShoppingCart);