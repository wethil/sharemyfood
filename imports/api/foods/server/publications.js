import { Meteor } from 'meteor/meteor';
import '../foods.js'
import Cookers from '../../cookers/cookers.js'

Meteor.publish("allFoods",function(queryType,activeCooker,foodType){
  switch (queryType) {
    case 0:
          return Foods.find({cookerId:activeCooker})
      break;
    case 1:
          return Foods.find({foodType:foodType})
       break ;
      case 2:
      	  return Foods.find({foodType:foodType, cookerId:activeCooker})  
      	break ;  
    default:
         return  Foods.find()
  }

})

Meteor.publish("menuFoodList",function(activeCooker,foodType){

      	  return Foods.find({foodType:foodType, cookerId:activeCooker})  

})
