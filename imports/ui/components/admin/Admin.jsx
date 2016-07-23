import React from 'react';
import CookersForm from '../forms/CookersForm.jsx'
import FoodForm from '../forms/FoodForm.jsx'
import {CookersComposer} from '../../composers/CookersComposer.jsx'
 const Admin = React.createClass({
	render() {
		return (
			<div>
				<CookersForm />
				<FoodForm />
				<CookersComposer />
			</div>
		);
	}
});

export default Admin;