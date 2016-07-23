import Cookers from '../cookers/cookers.js'

Foods = new Mongo.Collection('foods',{
    transform : function (doc) {
        doc.cooker=Cookers.findOne({
            _id:doc.cookerId
        },{fields:{
            'inf' :0
        }})
        return doc

    }
});


Foods.attachSchema(
    new SimpleSchema({
    foodName: {
      type: String
    },
    foodDesc: {
      type: String
    },
    photo:{
      type:String
    },
    cookerId:{
    	type:String,
    	optional:false
    },
    orderQuantity :{
    	type:Number,
    	defaultValue:0
    }
  })
);



Foods.allow({
    insert: function() {
        return true;
    },
    update: function() {
        return true;
    },
    remove: function() {
        return true;
    }
});

export default Foods;
