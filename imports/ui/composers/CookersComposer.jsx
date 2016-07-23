import React from 'react';
import { composeWithTracker } from 'react-komposer'
import Cookers from '../../api/cookers/cookers.js'
import CookerList from '../components/cookers/CookerList.jsx'

const composer = (props,onData) => {
	//console.log('y_id = ' + yellId)
	const subscription = Meteor.subscribe('allCookers')
	if (subscription.ready()) {
		
		const cookers = Cookers.find().fetch()
	
		onData(null,{cookers})
	}
}

export const CookersComposer = composeWithTracker (composer) (CookerList);


