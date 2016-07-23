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
			                  <h2 className="ui white header"  >Komşuda pişer, bize de düşer.</h2>
			                  <h4 className="ui white header"> Aşağıya inip yemek seçin. </h4>		
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