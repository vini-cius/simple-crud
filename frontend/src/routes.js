import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import UserForm from './components/UserForm';
import UserList from './components/UserList';
import UserEdit from './components/UserEdit';


const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={UserList} />
			<Route path="/users" component={UserForm} />
			<Route path="/user/:id" component={UserEdit} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
