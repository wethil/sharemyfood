import { Meteor } from 'meteor/meteor';
import '../cookers.js'


Meteor.publish('allCookers',function(){
	return Cookers.find()
});