import React from 'react';
import {FoodListComposer} from '../../composers/FoodListComposer.jsx'

const CookersMenu = React.createClass({
	 getInitialState (){

    return {
        activeCooker:this.props.cookers[0]._id,
        queryType:0,
        foodType:"food"
    }
  },

	render() {
		   if ( this.props.cookers && this.props.cookers.length > 0 ) {
		    	var cookers = []
		     this.props.cookers.forEach( ( cooker ) =>  {
		     	if (this.state.activeCooker==cooker._id ) {
		      			cName="item active"
		      		} else {
		      			cName ="item"
		      		}
		      cookers.push( 
		      			<a  className={cName}
		      				onClick={()=>	this.setState({
				      				 	activeCooker:cooker._id,
				      				 	queryType:0

				      									 })
		      						}>
					        {cooker.fullName}
					      </a>
		         ) ;
		    });
		  } else {
		    cookers ="No cookers" ;
		  }

		  if (cookers!="No cookers") {
		  	cookers.push(
		  			<a  className={

		  				this.state.activeCooker=="drinks" ? "item active" : "item"
		  			}
		      				onClick={()=>	this.setState({
		      							activeCooker:"drinks",
		      							queryType:1,
				      				 	foodType:"drink"

				      									 })
		      						}>
					        İçecekler
					      </a>
		  		)
		  }

		return (
		<div  className="ui grid" style={{marginRight:0}} >
			<div  className="three wide column" style={{marginTop:27}} >
				<div id="cookers" className="ui  vertical pointing menu">
					{cookers} 
				</div>
					<div className="ui divider"></div>
					<div className="ui info message">
					  <div className="header">
					    Sipariş : 0507 048 9706					  </div>
					  <ul className="list">
					    <li>Bütün yemekler 8 liradır.</li>
					    <li>Bütün içecekler 1,5 liradır.</li>
					  </ul>
					</div>  
			</div>
			<div  className="thirteen wide stretched column">
					<FoodListComposer 
								cookerId={this.state.activeCooker}
								queryType={this.state.queryType}
								foodType={this.state.foodType}
								/>
			</div>
		</div>
		);
	}
});


export default CookersMenu







