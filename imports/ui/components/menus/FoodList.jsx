import React from 'react';

const FoodList = React.createClass({
	render() {

	    var weekday = []
	    weekday[0] = "Pazar";
	    weekday[1] = "Pazartesi";
	    weekday[2] = "Salı";
	    weekday[3] = "Çarşamba";
	    weekday[4] = "Perşembe";
	    weekday[5] = "Cuma";
	    weekday[6] = "Cumartesi";

		if ( this.props.foods && this.props.foods.length > 0 ) {
		    	var foodList = []
		     this.props.foods.forEach( ( food ) =>  {
		     	day = Number(food.foodDay)
		     	 d = new Date();
				 n = d.getDay();
				 if (n==day) {
				 	todayLabel= <a className="ui brown empty circular label"></a>
				 } else {
				 	todayLabel=""
				 }

		      foodList.push( 
					<div style={{marginTop:5, marginBottom:5}} className="className">
					{todayLabel}
						<span className="menuDay"> {weekday[day]} </span> | 
						<span className="menuFood"> {food.foodName} </span>
					</div>	
		         ) ;
		    });
		  } else {
		    foodList ="No foods" ;
		  }

		return (
			<div>
				{foodList}
			</div>
		);
	}
});

export default FoodList  





