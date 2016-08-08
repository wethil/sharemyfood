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
					<div className="ui seven wide column  ">
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
			<div className="ui four column  grid">
				<div className="ui five wide column">
					<InfoCard1 />
					<InfoCard2 />
				</div>

				 {menus}
				 <div className="ui four wide column">
				 		<div className="ui card">
						  <div className="image">
						    <img src="http://res.cloudinary.com/dmboea9te/image/upload/v1470677034/ea319d3d-0b92-49c0-906d-3ea4ab420c6a_vszsw5.jpg" />
						  </div>
						  <div className="content">
						    <a className="header">Dolma</a>
						    <div className="meta">
						      <span className="date"> Patlıcan Dolması</span>
						    </div>
						    <div className="description">
						      Dolmayı bir de yaseminden deneyin!
						    </div>
						  </div>
						</div>
				 </div>
			
		</div>
		);
	}
});

 export default Menus

	 									
										   
									


