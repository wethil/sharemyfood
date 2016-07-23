import React from 'react';
import { Meteor } from 'meteor/meteor';
import FoodCards from './foodCards/FoodCards.jsx'
import MainPage from './mainPage/MainPage.jsx'
import Footer from './Footer.jsx'
import {CookersComposer} from '../composers/CookersComposer.jsx'
import {FoodListComposer} from '../composers/FoodListComposer.jsx'
import scrollTo from 'jquery.scrollto'


const Index = React.createClass({
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
			                  <h2 className="ui white header"  >İstediğiniz yemeği sipariş edin.</h2>
			                  <button onClick={this.handleScroll} className="ui primary button ">Yemeklere göz atın</button>
			              </div>
			          </div>
			      </section>

				<div id="card">
					<FoodListComposer />
				</div>	
					<CookersComposer />
					<Footer />	
				</div>	
		);
	}
});


export default Index;