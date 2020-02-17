import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { APIURL } from '../config.js';

class ProfilesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      error: false
    };
  }

  componentDidMount() {
    axios
      .get(`${APIURL}/profiles`)
      .then(response => {
        console.log(response.data);
        this.setState({ profiles: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.profiles.map(profile => (
          <div key={profile._id}>
            <Link to={`/profiles/${profile._id}`}>
              <img src={profile.image} />
              {profile.name}
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default ProfilesList;
