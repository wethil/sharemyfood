import React from 'react';

 const GuestStat = React.createClass({
	render() {

		if ( this.props.guests && this.props.guests.length > 0 ) {
		    	var guestsList = []
		     this.props.guests.forEach( ( guest ) =>  {
		 
		      guestsList.push( 
						<li> {guest.city}  {guest.country} {guest.regionName} </li>
		         ) ;
		    });
		  } else {
		    guestsList ="No foods" ;
		  }

		return (
					<ol class="ui list">
					  {guestsList} 
					</ol>
		);
	}
});

export default GuestStat