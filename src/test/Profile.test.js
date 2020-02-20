import React from 'react';
import { shallow } from 'enzyme';

import Profile from '../components/Profile';

let defaultProps = {
  profile: {
    image: '',
    name: '',
    age: '',
    location: '',
    bio: '',
    languages: '',
    github: ''
  }
};

// describe('Profile component', () => {
//   it('should render', () => {
//     const component = shallow(<Profile profile={defaultProps.profile} />);
//     console.log(component.find('.cheat-div'));
//     expect(component.find('.cheat-div').length).toBe(1);
//   });
// });

describe('Profile component', () => {
  it('should have a button with a class match-button that links to Match.js', () => {
    const component = shallow(<Profile profile={defaultProps.profile} />);
    component.setState({ params: params });
    expect(component.find('.match-button').length).toBe(1);
  });
});

{
  /* <div className="cheat-div">We are cheating</div>; */
}

// console.log(
//   component.contains(<div className="cheat-div">We are cheating</div>)
// );
// expect(
//   component.contains(<div className="cheat-div">We are cheating</div>)
// ).toBe(true);
