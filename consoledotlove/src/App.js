import React, { Component } from 'react';
import './App.css';
import ProfilesList from './components/ProfilesList';
import Welcome from './components/Welcome';
import Profile from './components/Profile';
import Edit from './components/Edit';
import { Link, Switch, Route } from 'react-router-dom';

const App = () => (
	<div>
		<header>{/* <Link to="/profiles">All Profiles</Link> */}</header>
		<main>
			<Switch>
				<Route exact path="/" component={Welcome} />
				<Route exact path="/profiles" component={ProfilesList} />
				<Route exact path="/profiles/:id" component={Profile} />
				<Route exact path="/profiles/:id/edit" component={Edit} />
			</Switch>
		</main>
	</div>
);

export default App;
