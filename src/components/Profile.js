import React, { Component } from 'react';
import './Profile.css';
import axios from 'axios';
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
            <div className="profile-box">
                <img
                    id="profile-image"
                    src={this.state.profile.image}
                    alt={this.state.profile.name}
                />
                <ul>
                    <li>Name: {this.state.profile.name}</li>
                    <li>Age: {this.state.profile.age}</li>
                    <li>City: {this.state.profile.location}</li>
                    <li>Bio: {this.state.profile.bio}</li>
                    <li>Programming: {this.state.profile.languages}</li>
                    <li>Github: {this.state.profile.github}</li>
                </ul>
                <div>
                    <Link to={`/profiles/${this.state.profile._id}/edit`}>
                        Edit
                    </Link>
                    <Link to={`/profiles/${this.state.profile._id}/match`}>
                        Match
                    </Link>
                </div>
            </div>
        );
    }
}

export default Profile;
