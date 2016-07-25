import React from 'react';
import {FoodListComposer} from '../../composers/FoodListComposer.jsx'

const CookersMenu = React.createClass({
	 getInitialState (){

    return {
        activeCooker:this.props.cookers[0]._id
    }
  },

	render() {
		   if ( this.props.cookers && this.props.cookers.length > 0 ) {
		    	var cookers = []
		     this.props.cookers.forEach( ( cooker ) =>  {
		     	if (this.state.activeCooker==cooker._id) {
		      			cName="item active"
		      		} else {
		      			cName ="item"
		      		}
		      cookers.push( 
		      		

		      			<a  className={cName}
		      				onClick={()=>	this.setState({
				      				 	activeCooker:cooker._id

				      									 })

		      						}>
					        {cooker.fullName}
					      </a>
		         ) ;
		    });
		  } else {
		    cookers =  <p>No list items yet!</p> ;
		  }

		return (
			<div  className="ui grid" style={{marginRight:0}} >
					  <div  className="three wide column" style={{marginTop:27}} >
					   
					  <div  className="ui  vertical pointing menu">
						{cookers}   
			 </div>

					  </div>
					  <div  className="thirteen wide stretched column">
					   
					      	<FoodListComposer cookerId={this.state.activeCooker} />
					    
					  </div>
					</div>
		);
	}
});


export default CookersMenu







		