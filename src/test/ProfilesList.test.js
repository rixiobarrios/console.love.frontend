import React from 'react';
import { shallow } from 'enzyme';

import ProfilesList from '../components/ProfilesList';

let component;
beforeEach(() => {
  component = shallow(<ProfilesList />, {
    disableLifecycleMethods: true
  });
});

it('should render', () => {
  expect(component.find('.loading').length).toBe(1);
});
