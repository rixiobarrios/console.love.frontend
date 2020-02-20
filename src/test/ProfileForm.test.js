import React from 'react';
import ReactDOM from 'react-dom';
import ProfileForm from '../components/ProfileForm';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

const defaultProps = {
  profile: [],
  handleSubmit: this.handleSubmit(),
  handleChange: this.handleChange()
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProfileForm />, div);
});
