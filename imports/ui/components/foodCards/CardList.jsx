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
		      foods.push( <div  className='four wide column' key={ food._id }  >  
				    <div className="ui special cards">
						  <div className="card">
						    <div className="blurring dimmable image">
						      <div className="ui inverted dimmer">
						        <div className="content">
						          <div className="center">
						            <div className="ui primary button">Add Friend</div>
						          </div>
						        </div>
						      </div>
						      <img className="mImg" src={food.photo}  />
						    </div>
						    <div className="content">
						      <a  className='header'> {food.foodName} </a> 
						      <div className="meta">
						        <a  className='header'> {food.foodDesc} </a> 
						      </div>
						    </div>
						    <div className="ui bottom attached button">
						      <i className="add icon"></i>
						      Sipariş et
						    </div>
						  </div>
						</div>      
				     </div> 

		         ) ;
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








