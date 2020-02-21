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
                this.setState({ createdId: true });
                this.props.setGuest(false);
            })
            .catch(() => {
                this.setState({ error: true });
            });
    };

    render() {
        const { createdId } = this.state;
        // if a new profile is created, redirect the user to the page with the new profile by id
        if (createdId) {
            return <Redirect to={`/profiles`} />;
        }

        return (
            <div>
                <p id="sign-up-message">
                    Welcome to console.love,
                    <br />
                    where programmers can find love and friendship.
                    <br />
                    Find your pair programming sweetie now!
                </p>
                <ProfileForm
                    profile={this.state.profile}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                {/* fade button and center */}
                <div className="guest-link">
                    <Link to="/profiles">continue as guest</Link>
                </div>
            </div>
        );
    }
}

export default Welcome;
