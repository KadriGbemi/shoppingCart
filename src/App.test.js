import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import MobileNavbar from './navbar/mobile-navbar';
import DesktopNavbar from './navbar/desktop-navbar';
import ShoppingCart from './cart/shopping-cart';
import Cards from './content/allCards/Cards';


Enzyme.configure({adapter: new Adapter()});


describe('Unit testing of App (UI) Components using Enzyme and Chai', () => {

    let component;
    beforeEach(() => {
        component = shallow(<App/>);
    });

    it('renders without crashing', () => {
        expect(component.length).to.equal(1);
    });

    it('It includes div with className App', () => {
        expect(component.find('div.App')).to.have.lengthOf(1);
    });

    it('It includes header with className App-header', () => {
        expect(component.find('header.App-header')).to.have.lengthOf(1);
    });

    it('It renders the necessary application components', () => {
        const wrapper = shallow((
          <div className="App">
              <header/>
              <MobileNavbar/>
              <DesktopNavbar />
              <ShoppingCart />
              <div className="App-content"/>
          </div>
        ));
        expect(wrapper.contains([<header/>,
                                        <MobileNavbar/>,
                                        <DesktopNavbar />, <ShoppingCart />])).to.equal(true);
    });

    it('It displays the application shopping card component', () => {
      const wrapper = shallow((
        <div className="App-content">
           <Cards/>
        </div>
      ));
      expect(wrapper.contains(<Cards/>)).to.equal(true);
  });
});
