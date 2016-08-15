import React from 'react';
import { composeWithTracker } from 'react-komposer'
import Foods from '../../api/foods/foods.js'
import FoodList from '../components/menus/FoodList.jsx'
import _ from 'lodash'

const composer = (props,onData) => {
	activeCooker=props.cookerId
	
	foodType="menu"
	const subscription = Meteor.subscribe('menuFoodList',activeCooker,foodType)


	if (subscription.ready()) {
		

		const preFoods = Foods.find({foodType:foodType, cookerId:activeCooker}).fetch()
		foods=_.sortBy(preFoods, function(o) { return Number(o.foodDay); });
		onData(null,{foods})
	}
}

export const WMFoodListComp = composeWithTracker (composer) (FoodList);

