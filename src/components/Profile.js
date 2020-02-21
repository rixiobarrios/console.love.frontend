import React, { Component } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import { APIURL } from '../config';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null,
      error: false
    };
  }

  componentDidMount() {
    fetch(`${APIURL}/profiles/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ profile: data });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="sorry">
          Sorry, there was a problem getting the profile
        </div>
      );
    }

    if (!this.state.profile) {
      return <div className="loading">Loading...</div>;
    }

    return (
      <div className="profile-page-container">
        <div className="profile-box">
          <img
            id="profile-image"
            src={this.state.profile.image}
            alt={this.state.profile.name}
          />
          <div className="profile-list">
            <ul className="profile-ul">
              <li>Name: {this.state.profile.name}</li>
              <li>Age: {this.state.profile.age}</li>
              <li>City: {this.state.profile.location}</li>
              <li>Bio: {this.state.profile.bio}</li>
              <li>Languages: {this.state.profile.languages}</li>
            </ul>
          </div>
        </div>
        <div>
          <Link to={`/profiles/${this.state.profile._id}/edit`}>
            <button className="edit-button">Edit</button>
          </Link>
          <Link to={`/profiles/${this.state.profile._id}/match`}>
            <button className="match-button">Match</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Profile;
