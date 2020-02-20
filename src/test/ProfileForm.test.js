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
    console.log(component.find('#sign-up-message'));
    expect(component.find('#sign-up-message').length).toBe(1);
  });
});
