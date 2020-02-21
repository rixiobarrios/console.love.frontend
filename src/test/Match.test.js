import React from 'react';
import { shallow } from 'enzyme';

import Match from '../components/Match';

describe('Match component', () => {
  it('should render', () => {
    const component = shallow(<Match />);
    expect(component.find('.match-container').length).toBe(1);
  });
});
