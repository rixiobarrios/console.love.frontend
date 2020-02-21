import React from 'react';
import { shallow } from 'enzyme';

import Profile from '../components/Profile';

let component;
beforeEach(() => {
  component = shallow(<Profile />, {
    disableLifecycleMethods: true
  });
});

it('should render', () => {
  console.log(component.find('.loading'));
  expect(component.find('.loading').length).toBe(1);
});
