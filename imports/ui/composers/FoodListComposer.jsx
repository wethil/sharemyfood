import React from 'react';
import { composeWithTracker } from 'react-komposer'
import Foods from '../../api/foods/foods.js'
import CardList from '../components/foodCards/CardList.jsx'

const composer = (props,onData) => {
	cookerId=props.cookerId
	const subscription = Meteor.subscribe('allFoods')


	if (subscription.ready()) {
		
		const foods = Foods.find({cookerId:cookerId}).fetch()
	
		onData(null,{foods})
	}
}

export const FoodListComposer = composeWithTracker (composer) (CardList);



