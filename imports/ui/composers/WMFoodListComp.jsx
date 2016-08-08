import React from 'react';
import { composeWithTracker } from 'react-komposer'
import Foods from '../../api/foods/foods.js'
import FoodList from '../components/menus/FoodList.jsx'

const composer = (props,onData) => {
	activeCooker=props.cookerId
	
	foodType="menu"
	const subscription = Meteor.subscribe('menuFoodList',activeCooker,foodType)


	if (subscription.ready()) {
		
		const foods = Foods.find({foodType:foodType, cookerId:activeCooker}).fetch()
	
		onData(null,{foods})
	}
}

export const WMFoodListComp = composeWithTracker (composer) (FoodList);

