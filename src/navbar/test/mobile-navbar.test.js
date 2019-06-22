import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MobileNavbar from '../mobile-navbar';


Enzyme.configure({adapter: new Adapter()});

describe('Unit testing of Mobile Navbar (UI) Component using Enzyme, Jest', () => {
    let component;
    let props;
    beforeEach(() => {
        component = shallow(<MobileNavbar/>);
        props = localStorage.getItem('cartItems')
    });

        it('it renders without crashing', () => {
            expect(component.length).toEqual(1);
        });

        it('It renders together with props without crashing', () => {
            const wrapper = shallow(<MobileNavbar {...props}/>);
            expect(wrapper.length).toEqual(1)
        });

        it('It includes main div with className (App-mobile-nav-bar)', () => {
            expect(component.exists('.App-mobile-nav-bar')).toEqual(true);
        });

        it('renders children when passed in', () => {
            const component = shallow((
                <div className="App-mobile-nav-bar">
                    <h3 className="App-mobile-nav-bar-title">SHOEMARKET</h3>
                    <div className="App-mobile-nav-bar-header"/>,
                    <div className="App-mobile-nav-bar-icon"/>,
                    <span/>
                </div>
            ));
            expect(component.containsAllMatchingElements([<h3 className="App-mobile-nav-bar-title">SHOEMARKET</h3>,
                <div className="App-mobile-nav-bar-header"/>,
                <div className="App-mobile-nav-bar-icon"/>,
                <span/>])).toBe(true);
        });

        it('tests click event to open the shopping cart', () => {
            const handleShoppingCartDisplay = jest.fn();
            const wrapper = shallow(
                <MobileNavbar handleShoppingCartClickOpen={handleShoppingCartDisplay}/>
            );
            wrapper.find('.App-mobile-nav-bar-icon').at(1).simulate('click');
            expect(handleShoppingCartDisplay).toBeCalled();
          });
    }
);