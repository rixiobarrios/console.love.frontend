import React from 'react';
import { shallow } from 'enzyme';

import ProfileForm from '../components/ProfileForm';
import Profile from '../components/Profile';

let handleSubmit = i => {
  i;
};
let handleChange = i => {
  i;
};

let defaultProps = {
  profile: {
    image: '',
    name: '',
    age: '',
    location: '',
    bio: '',
    languages: '',
    github: ''
  },
  handleSubmit: handleSubmit(),
  handleChange: handleChange()
};

describe('ProfileForm component', () => {
  it('should render', () => {
    const component = shallow(
      <ProfileForm
        profile={defaultProps.profile}
        handleSubmit={defaultProps.handleSubmit}
        handleChange={defaultProps.handleChange}
      />
    );
    expect(component.find('.form-container').length).toBe(1);
  });
});
