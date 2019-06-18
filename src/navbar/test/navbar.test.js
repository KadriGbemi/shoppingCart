import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationBar from '../navbar';
import App from '../../App';

Enzyme.configure({ adapter: new Adapter() });

describe('Navigation Bar Component', () => {
    it('it renders without crashing', () => {
        expect(shallow(<NavigationBar />).length).toEqual(1);
    });
  });