import { Meteor } from 'meteor/meteor';
import '../foods.js'
import Cookers from '../../cookers/cookers.js'

Meteor.publishComposite('allFoods', {
    find: function() {
        // Find top ten highest scoring posts
        return Foods.find()
    },
    children: [
        {
            find: function(food) {
                // Find post author. Even though we only want to return
                // one record here, we use "find" instead of "findOne"
                // since this function should return a cursor.
                return Cookers.find(
                    { _id: food.cookerId },
                    { limit: 1, fields: { inf: 0 } });
            }
        }
  
    ]
});