import React from 'react';

 const CardList = React.createClass({
 	componentWillMount() {
 		$('.special.cards .image').dimmer({
			  on: 'hover'
			});
 	} ,
	render() {
		 if ( this.props.foods && this.props.foods.length > 0 ) {
		    	var foods = []
		     this.props.foods.forEach( ( food ) =>  {

		      if (food.photo) {
		      	foods.push( <div  className='four wide column animated fadeIn ' key={ food._id }  >  
			<div className="ui card">
						  <div className="image">
						   <div className="ui blue ribbon label">
						        {food.foodDay}
						      </div>
						    <img className="mImg" src={food.photo}  />
						  </div>
						  <div className="content">
						     <a  className='header'> {food.foodName} </a> 
						    <div className="description">
						       <a  className='header'> {food.foodDesc} </a> 
						    </div>
						  </div>
						    
						</div>    
				     </div> 

		         ) ;
		      } 
		   

		    });
		  } else {
		    foods =  <p>No list items yet!</p> ;
		  }

		return (
			<div className="ui container  stackable grid" id="cards">  	
					{foods}
			</div>
				
		);
	}
});

export default CardList








