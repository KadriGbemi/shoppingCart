import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import MobileNavbar from './navbar/mobile-navbar';
import NavigationBar from './navbar/navbar';
import ShoppingCart from './cart/ShoppingCart';
import Cards from './content/cards/Cards';


Enzyme.configure({adapter: new Adapter()});


describe('Unit testing of App Components using Enzyme and Chai', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App/>);
    });

    it('renders without crashing', () => {
        expect(wrapper.length).to.equal(1);
    });

    it('It includes div with className App', () => {
        expect(wrapper.find('div.App')).to.have.lengthOf(1);
    });

    it('It includes header with className App-header', () => {
        expect(wrapper.find('header.App-header')).to.have.lengthOf(1);
    });

    it('It renders the necessary application components', () => {
        const wrapperWithChildren = shallow((
          <div className="App">
              <header/>
              <MobileNavbar/>
              <NavigationBar />
              <ShoppingCart />
              <div className="App-content"/>
          </div>
        ));
        expect(wrapperWithChildren.contains([<header/>,
                                        <MobileNavbar/>,
                                        <NavigationBar />, <ShoppingCart />])).to.equal(true);
    });

    it('It displays the application shopping card component', () => {
      const wrapperContent = shallow((
        <div className="App-content">
           <Cards/>
        </div>
      ));
      expect(wrapperContent.contains(<Cards/>)).to.equal(true);
  });
});
