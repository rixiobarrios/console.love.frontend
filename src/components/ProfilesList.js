import React, { Component } from 'react';
import './ProfilesList.css';
import { Link } from 'react-router-dom';
import { APIURL } from '../config.js';
import _ from 'lodash';

class ProfilesList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			profiles: [],
			error: false
		};
	}

	randomizeData = data => {
		let profileShuffle = _.shuffle(data);
		return profileShuffle;
	};

	componentDidMount() {
		fetch(`${APIURL}/profiles`)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				let shuffledData = this.randomizeData(data);
				console.log(shuffledData);
				this.setState({ profiles: shuffledData });
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
			<div className="profile-container">
				{this.state.profiles.map(profile => (
					<div key={profile._id}>
						<Link to={`/profiles/${profile._id}`}>
							<img src={profile.image} alt={profile.name} />
						</Link>
					</div>
				))}
			</div>
		);
	}
}

export default ProfilesList;
