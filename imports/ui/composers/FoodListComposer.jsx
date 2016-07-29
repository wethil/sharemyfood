import React from 'react';
import { composeWithTracker } from 'react-komposer'
import Foods from '../../api/foods/foods.js'
import CardList from '../components/foodCards/CardList.jsx'

const composer = (props,onData) => {
	activeCooker=props.cookerId
	queryType=props.queryType
	foodType=props.foodType
	const subscription = Meteor.subscribe('allFoods',queryType,activeCooker,foodType)


	if (subscription.ready()) {
		
		const foods = Foods.find().fetch()
	
		onData(null,{foods})
	}
}

export const FoodListComposer = composeWithTracker (composer) (CardList);



