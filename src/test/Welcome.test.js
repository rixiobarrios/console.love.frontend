import React from 'react';
import { mount } from 'enzyme';
import Welcome from '../components/Welcome';
import ProfileForm from '../components/ProfileForm';

describe('Welcome component', () => {
  let component;
  beforeEach(() => {
    component = mount(<Welcome />);
  });
  it('should render as expected', () => {
    expect(component.state('profile').toBe('object'));
  });
});
