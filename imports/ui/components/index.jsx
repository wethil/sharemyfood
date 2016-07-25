import React from 'react';
import { Meteor } from 'meteor/meteor';
import FoodCards from './foodCards/FoodCards.jsx'
import MainPage from './mainPage/MainPage.jsx'
import Footer from './Footer.jsx'
import {CookersComposer} from '../composers/CookersComposer.jsx'
import {CookersMenuComposer} from '../composers/CookersMenuComposer.jsx'


const Index = React.createClass({
	
	componentDidMount() {
		$('#firstHead').circleType({radius: 384});
	},
	handleScroll() {
		$.scrollTo(document.getElementById('cards'), 800);
	},

	render() {
		return (
				<div className="className">
					 <section className="mSection" >  
			          <div className="ui center aligned grid">
			              <div className="ten wide  column pageCenter ">
			                  <img src="logo.png" alt="Yemeğini Paylaş" className="ui medium centered image" />
			                  <h1  id="firstHead" className="ui white header">Bizde pişer size de düşer.</h1>
			                  <button className="ui primary button" onClick={this.handleScroll} > Yemeklere Göz Atın </button>		
			              </div>
			          </div>
			      </section>

				<div id="card">
				 <CookersMenuComposer />
				</div>	
					<CookersComposer />
					<Footer />	
				</div>	
		);
	}
});


export default Index;