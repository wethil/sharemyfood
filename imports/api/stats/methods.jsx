import { Meteor } from 'meteor/meteor';
import Guests from './guests.js'

Meteor.methods({
	addGuest :  function (data) {
		Guests.insert({
			city:data.city,
			country:data.country,
			regionName:data.regionName,
			date : new Date()
		})
	}
});