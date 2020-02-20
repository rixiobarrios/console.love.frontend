import React from 'react';
import { shallow } from 'enzyme';
import Welcome from '../components/Welcome';

describe('Welcome component', () => {
  let component = shallow(<Welcome />);
  it('should render as expected', () => {
    expect(component.state('profile').toBeAn('object'));
  });
});
