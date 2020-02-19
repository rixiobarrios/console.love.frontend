import React, { Component } from 'react';
import './ProfilesList.css';
import { Link } from 'react-router-dom';
import { APIURL } from '../config.js';
import _ from 'lodash';

let pNumber = 0;

class ProfilesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      shownProfiles: [],
      error: false
    };
  }

  // shuffles data
  randomizeData = data => {
    let profileShuffle = _.shuffle(data);
    return profileShuffle;
  };
  // updates shownProfiles
  profileDisplay = () => {
    let tempArray = [];
    if (pNumber <= this.state.profiles.length) {
      for (let i = 0; i < pNumber; i++) {
        tempArray = tempArray.concat(this.state.profiles[i]);
      }
      this.setState({ shownProfiles: tempArray });
    }
  };
  // increments shown data number
  showMore = () => {
    pNumber += 10;
    this.profileDisplay();
  };
  componentDidMount() {
    fetch(`${APIURL}/profiles`)
      .then(response => response.json())
      .then(data => {
        let shuffledData = this.randomizeData(data);
        this.setState({ profiles: shuffledData });
        this.showMore();
      })
      .catch(() => {
        this.setState({ error: true });
      });
  }

  render() {
    if (this.state.error) {
      return <div>Sorry, there was a problem getting the profiles :/</div>;
    }

    if (this.state.profiles.length === 0) {
      return <div>Loading...</div>;
    }
    return (
      <div className="profiles-container">
        <div className="profile-container">
          {this.state.shownProfiles.map(profile => (
            <div key={profile._id}>
              <Link to={`/profiles/${profile._id}`}>
                <img
                  id="profile-image-list"
                  src={profile.image}
                  alt={profile.name}
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="show-more-container">
          {pNumber < this.state.profiles.length && (
            <button className="show-more-button" onClick={this.showMore}>
              Show More
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default ProfilesList;
