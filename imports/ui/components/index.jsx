import React from 'react';
import { Meteor } from 'meteor/meteor';
import FoodCards from './foodCards/FoodCards.jsx'
import MainPage from './mainPage/MainPage.jsx'
import Footer from './Footer.jsx'
import {CookersComposer} from '../composers/CookersComposer.jsx'
import {CookersMenuComposer} from '../composers/CookersMenuComposer.jsx'
import {WeeklyMenuCookersComp} from '../composers/WeeklyMenuCookersComp.jsx'
import FoodList from './foodCards/FoodList.jsx'
import Menus from './menus/Menus.jsx'
import emitter from './Emitter.jsx'

const Index = React.createClass({
	
	componentDidMount() {
		HTTP.call( 'GET', 'http://ip-api.com/json', {}, function( error, response ) {
		  if ( error ) {
		    console.log( error );
		  } else {
		    		Meteor.call('addGuest', response.data, error => {
			            if (error) {
			                console.log('error', error);
			            } else {
			            	console.log('added')

			            } 
			    })
		  
		  }
		});
	},
	handleScroll() {
		console.log('sad')
		$.scrollTo(document.getElementById('cards'), 800);
	},

	render() {
		emitter.addListener('scroll', this.handleScroll);
		return (
				<div className="className">
					 <section className="mSection" >  
			          <div className="ui grid">
			              <div className="sixteen wide  column pageCenter ">
			              <h1  id="firstHead" className="ui center aligned white header">Bizde pişer size de düşer.</h1>
										 <WeeklyMenuCookersComp />

							
			                  
			                  {/*<button className="ui primary button" onClick={this.handleScroll} > Yemeklere Göz Atın </button>*/	}	
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







