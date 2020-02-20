import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
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
        bio: '',
        languages: '',
        github: ''
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

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.profile);

    fetch(`${APIURL}/profiles`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(this.state.profile)
    })
      .then(response => {
        response.json();
      })
      .then(response => {
        console.log(response);
        this.setState({ createdId: true });
        this.props.setGuest(false);
      })
      .catch(() => {
        this.setState({ error: true });
      });
  };

  render() {
    console.log(this.state.profile._id);
    const { createdId } = this.state;
    console.log(createdId);
    // if a new profile is created, redirect the user to the page with the new profile by id
    if (createdId) {
      return <Redirect to={`/profiles`} />;
    }

    return (
      <div>
        <ProfileForm
          profile={this.state.profile}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {/* fade button and center */}
        <div className="guest-link">
          <Link to="/profiles">Continue as Guest</Link>
        </div>
      </div>
    );
  }
}

export default Welcome;
