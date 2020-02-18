import React, { Component } from 'react';
import axios from 'axios';
import { Link, Switch, Route } from 'react-router-dom';
import { APIURL } from '../config';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            profile: null,
            error: false
        };
    }
    componentDidMount() {
        axios
            .get(`${APIURL}/profiles/${this.props.match.params.id}`)
            .then(response => {
                console.log(response.data);
                this.setState({ profile: response.data });
            })
            .catch(() => {
                this.setState({ error: true });
            });
    }

    render() {
        if (this.state.error) {
            return <div>Sorry, there was a problem getting the profile</div>;
        }

        if (!this.state.profile) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <img src={this.state.profile.image} />
                <div>
                    <ul>
                        <li>{this.state.profile.name}</li>
                        <li>{this.state.profile.age}</li>
                        <li>{this.state.profile.location}</li>
                        <li>{this.state.profile.about}</li>
                        <li>{this.state.profile.languages}</li>
                    </ul>
                    <Link to={`/profiles/${this.state.profile._id}/edit`}>
                        Edit
                    </Link>
                </div>
            </div>
        );
    }
}

export default Profile;
