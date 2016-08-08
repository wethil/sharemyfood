import React from 'react';
import { composeWithTracker } from 'react-komposer'
import Guests from '../../api/stats/guests.js'
import GuestStat from '../components/admin/GuestStat.jsx'
const composer = (props,onData) => {
	//console.log('y_id = ' + yellId)
	const subscription = Meteor.subscribe('allGuests')
	if (subscription.ready()) {
		
		const guests = Guests.find().fetch()
	
		onData(null,{guests})
	}
}

export const GuestsComp = composeWithTracker (composer) (GuestStat);


