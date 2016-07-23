import React from 'react';

 const MainPage = React.createClass({
	render() {
		return (
				 <section className="mSection" >  
      
          <div className="ui center aligned grid">
             
              <div className="ten wide  column pageCenter ">
                  <img src="logo.png" alt="Yemeğini Paylaş" className="ui medium centered image" />
                  <h2 className="ui white header"  >İstediğiniz yemeği sipariş edin.</h2>
                  <button className="ui primary button ">Yemeklere göz atın</button>
              </div>
              
          </div>
        
      </section>

		);
	}
});

export default MainPage;

		

     /*
      <div className="ui inverted vertical masthead center aligned segment">
			            <div className="ui container">
			            </div>
			            <div className="ui text container">
			              <h1 className="ui inverted header">
			                Imagine-a-Company
			              </h1>
			              <h2>Do whatever you want when you want to.</h2>
			              <div className="ui huge primary button">Get Started <i className="right arrow icon" /></div>
			            </div>
			          </div>*/