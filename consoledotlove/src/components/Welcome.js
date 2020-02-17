import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { APIURL } from '../config';
import ProfileForm from './ProfileForm';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        image: '',
        name: '',
        age: '',
        location: '',
        about: '',
        languages: ''
      },
      createdId: null,
      error: false
    };
  }

  handleChange = evt => {
    evt.persist();
    this.setState({
      profile: {
        ...this.state.profile,
        [evt.target.name]: evt.target.value
      }
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    axios
      .post(`${APIURL}/profiles`, { profile: this.state.profile })
      .then(response => {
        console.log(response);
        this.setState({ createdId: response._id });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  };

  render() {
    const { createdId } = this.state;
    console.log(this.state);
    // if a new profile is created, redirect the user to the page with the new profile by id
    if (createdId) {
      return <Redirect to={`/profiles/${createdId}`} />;
    }

    return (
      <div>
        <ProfileForm
          profile={this.state.profile}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Welcome;
