import React from 'react';
import { shallow } from 'enzyme';

import Edit from '../components/Edit';

let component;
beforeEach(() => {
  component = shallow(<Edit />, {
    disableLifecycleMethods: true
  });
});

it('should render', () => {
  expect(component.find('.delete-button').length).toBe(1);
});
