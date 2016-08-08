import React from 'react';
import FoodList from './FoodList.jsx'
import {WMFoodListComp} from '../../composers/WMFoodListComp.jsx'
import emitter from '../Emitter.jsx'
import {InfoCard1} from '../accesories/InfoCards'
import {InfoCard2} from '../accesories/InfoCards'

const Menus = React.createClass({
	handlePush() {
		console.log('push')
		emitter.emit('scroll')
	},
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
					<div className="ui eight wide column  ">
						<div className="ui segments">
								<div style={{fontSize:19}} className="ui raised segment">

									<h4 className="ui header menuHead"> {cooker.fullName} </h4>
									<WMFoodListComp 
										cookerId={cooker._id}/>
								
							</div>
							<div className="ui secondary segment">
							    <button className="ui fluid primary button" onClick={this.handlePush} > Diğer Yemeklere Göz Atın </button>	
							 </div>
						</div>
					</div>	
		         ) ;
		    });
		  } else {
		    menus ="No menu" ;
		  }



		return (
			<div className="ui two column  grid">
				<div className="ui five wide column">
					<InfoCard1 />
					<InfoCard2 />
				</div>
				
				 {menus}
			
		</div>
		);
	}
});

 export default Menus

	 									
										   
									