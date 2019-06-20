import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

import DesktopNavbar from '../desktop-navbar';
// import App from '../../App';

Enzyme.configure({adapter: new Adapter()});

describe('Unit testing of Desktop Navbar (UI) Component using Enzyme, Jest and Sinon', () => {
    let component;
    beforeEach(() => {
        component = shallow(<DesktopNavbar/>);
    });

        it('it renders without crashing', () => {
            expect(component.length).toEqual(1);
        });

        it('It renders together with props without crashing', () => {
            const props = {
                handleShoppingCartClickOpen: true,
                quantity: 0,
                shoppingCartIconAnimate: '',
                cartIcon: 'shopping_cart'
            }
            const wrapper = shallow(<DesktopNavbar {...props}/>);
            expect(wrapper.length).toEqual(1)
        });

        it('It includes main div with className (App-desktop-nav-bar)', () => {
            expect(component.exists('.App-desktop-nav-bar')).toEqual(true);
        });

        it('renders children when passed in', () => {
            const component = shallow((
                <div className="App-desktop-nav-bar">
                    <h3>SHOEMARKET</h3>
                    <div className="App-desktop-nav-bar-shopping-cart"/>,
                    <div className="App-desktop-nav-bar-shopping-cart-icon"/>,
                    <span/>
                </div>
            ));
            expect(component.containsAllMatchingElements([<h3>SHOEMARKET</h3>,
                <div className="App-desktop-nav-bar-shopping-cart"/>,
                <div className="App-desktop-nav-bar-shopping-cart-icon"/>,
                <span/>])).toBe(true);
        });

        it('simulates click event to open the shopping cart', () => {
            let handleShoppingCartDisplay = {
                handleShoppingCartClickOpen: true
            }
            handleShoppingCartDisplay = sinon.spy();
            const wrapper = shallow(
                <DesktopNavbar handleShoppingCartClickOpen={handleShoppingCartDisplay}/>
            );
            wrapper.find('.App-desktop-nav-bar-shopping-cart-icon').simulate('click');
            expect(handleShoppingCartDisplay).toHaveProperty('callCount', 1);
        });
    }
);