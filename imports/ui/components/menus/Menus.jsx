import React from 'react';
import FoodList from './FoodList.jsx'
import {WMFoodListComp} from '../../composers/WMFoodListComp.jsx'

const Menus = React.createClass({
	render() {

		


		  if ( this.props.cookers && this.props.cookers.length > 0 ) {
		    	var menus = []
		     this.props.cookers.forEach( ( cooker ) =>  {
		     	if (this.props.cookers.length==1) {
		     		exColumns =<div className="column middleMenu "></div>	
								
		     	} else {
		     		exColumns =""
		     	}
		     	
		      menus.push( 
					<div className="column middleMenu ">
						<div className="ui raised segment">
							<h4 className="ui header"> {cooker.fullName} </h4>
							<WMFoodListComp 
								cookerId={cooker._id}/>
						</div>
					</div>	
		         ) ;
		    });
		  } else {
		    menus ="No menu" ;
		  }



		return (
			<div className="ui three column equal width grid">
			{exColumns}
				 {menus}
			{exColumns}
		</div>
		);
	}
});

 export default Menus

	 									
										   
									