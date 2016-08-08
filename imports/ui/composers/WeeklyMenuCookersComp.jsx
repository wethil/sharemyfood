import React from 'react';
import { composeWithTracker } from 'react-komposer'
import Cookers from '../../api/cookers/cookers.js'
import Menus from '../components/menus/Menus.jsx'
const composer = (props,onData) => {
	//console.log('y_id = ' + yellId)
	const subscription = Meteor.subscribe('allCookers')
	if (subscription.ready()) {
		
		const cookers = Cookers.find({fullName: "Deniz'in Menüsü"}).fetch()
	
		onData(null,{cookers})
	}
}

export const WeeklyMenuCookersComp = composeWithTracker (composer) (Menus);


