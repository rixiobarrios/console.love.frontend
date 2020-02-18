import React, { Component } from 'react';
import './App.css';
import ProfilesList from './components/ProfilesList';
import Welcome from './components/Welcome';
import Profile from './components/Profile';
import Edit from './components/Edit';
import Match from './components/Match';
import { Link, Switch, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div>
				<header>
					<nav>
						<Link to="/profiles">Logo IMG</Link>
					</nav>
				</header>

				<main>
					<Switch>
						<Route exact path="/" component={Welcome} />
						<Route exact path="/profiles" component={ProfilesList} />
						<Route exact path="/profiles/:id" component={Profile} />
						<Route exact path="/profiles/:id/edit" component={Edit} />
						<Route exact path="/profiles/:id/match" component={Match} />
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
