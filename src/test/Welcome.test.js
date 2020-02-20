import React from 'react';
import { shallow, mount } from 'enzyme';
import Welcome from '../components/Welcome';
import ProfileForm from '../components/ProfileForm';

describe('Welcome component', () => {
  let component;
  beforeEach(() => {
    component = mount(<Welcome />);
  });
  it('should have a state error that comes back false', () => {
    expect(component.state('error')).toBe(false);
    component.find('input').simulate('change', { target: { value: 'error' } });
    expect(component.state('error')).toBe('false');
  });
});
