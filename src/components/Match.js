import React, { Component } from 'react';
import _ from 'lodash';

class Match extends Component {
	matchAlgorithm = () => {
		let match = _.sample([true, false]);
		if (match) {
			return <h1>It's a .match()!</h1>;
		} else {
			return (
				<div>
					<h1>Sorry, it's not meant to be</h1>
					<h2>Debugging in process...</h2>
				</div>
			);
		}
	};

	render() {
		return <div>{this.matchAlgorithm()}</div>;
	}
}

export default Match;
