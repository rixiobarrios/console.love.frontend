import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('App component', () => {
  it('should render', () => {
    const component = shallow(<App />);
    expect(component.find('.app-container').length).toBe(1);
  });
});
