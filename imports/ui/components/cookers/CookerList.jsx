import React from 'react';


 const CookerList = React.createClass({
	render() {
		 if ( this.props.cookers && this.props.cookers.length > 0 ) {
		    	var cookers = []
		     this.props.cookers.forEach( ( cooker ) =>  {
		      cookers.push( <div  className="item" key={ cooker._id }>
	                            <div  className="ui small circular image">
	                              <img src={cooker.photo}/>
	                            </div>
	                            <div  className=" middle aligned content">
	                              <a  className="header white ">{ cooker.fullName } </a>
	                              <div  className="meta">
	                                <span>{cooker.inf}</span>
	                              </div>
	                            </div>
                          </div>
		          ) ;
		    });
		  } else {
		    cookers =  <p>No list items yet!</p> ;
		  }

		return (
				<div  className="ui  grid cook">
					<div  className="four wide column"></div>
					<div  className="eight wide column">
						<h1  className="ui dividing white  center aligned header">Aşçılar</h1>
						<div  className="ui items">
							{cookers}
						</div>
					</div>
					<div  className="four wide column"></div>
				</div>
				
		);
	}
});

export default CookerList








