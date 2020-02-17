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

  handleChange = event => {
    event.persist();
    this.setState({
      profile: {
        ...this.state.profile,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`${APIURL}/profiles`, { profile: this.state.profile })
      .then(response => {
        console.log(response);
        console.log(this.state.profile);
        this.setState({ createdId: response._id });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  };

  render() {
    console.log(this.state);
    const { createdId } = this.state;
    console.log(createdId);
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
