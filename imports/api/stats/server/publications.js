import { Meteor } from 'meteor/meteor';
import Guests from '../../stats/guests.js'


Meteor.publish("allGuests",function(activeCooker,foodType){

      	  return Guests.find()  

})
