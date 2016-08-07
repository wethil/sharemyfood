import React from 'react';

const Menus = React.createClass({
	render() {

		  if ( this.props.cookers && this.props.cookers.length > 0 ) {
		    	var menus = []
		     this.props.cookers.forEach( ( cooker ) =>  {
		     	
		      menus.push( 
					<div className="column middleMenu ">
						<div className="ui raised segment">
							<h4 className="ui header"> {cooker.fullName} </h4>
							<p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
						</div>
					</div>	
		         ) ;
		    });
		  } else {
		    menus ="No menu" ;
		  }



		return (
			<div className="ui three column equal width grid">
				 {menus}
		</div>
		);
	}
});

 export default Menus

	 									
										   
									