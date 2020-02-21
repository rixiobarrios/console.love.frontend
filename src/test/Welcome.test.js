import React from 'react';
import { shallow } from 'enzyme';

import ProfileForm from '../components/ProfileForm';
import Welcome from '../components/Welcome';

describe('Welcome component', () => {
  it('should render', () => {
    const component = shallow(<Welcome />);
    expect(component.find('#sign-up-message').length).toBe(1);
  });
});
