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

const Index = React.createClass({
	
	componentDidMount() {
		//$('#firstHead').circleType({radius: 800});
	},
	handleScroll() {
		$.scrollTo(document.getElementById('cards'), 800);
	},

	render() {
		return (
				<div className="className">
					 <section className="mSection" >  
			          <div className="ui center aligned grid">
			              <div className="sixteen wide  column pageCenter ">
			              <h1  id="firstHead" className="ui white header">Bizde pişer size de düşer.</h1>
										 <WeeklyMenuCookersComp />

								<div className="ui grid">
										<div className="ui five wide column">
											<div className="ui info message">
					
										  <ul className="list">
										  <li>  Sipariş : 0507 048 9706	 </li>
										    <li>Bütün yemekler 8 lira, içecekler 1,5 liradır.</li>
										    
										  </ul>
										</div> 
									</div>
									<div className="ui three wide column ">
										<button className="ui primary button" onClick={this.handleScroll} > Diğer Yemeklere Göz Atın </button>	
									</div>
									<div className="ui eight wide column">
											<div className="ui info message">
											  <ul className="list">
											    <li>Özel davetleriniz ve günleriniz için sipariş alınır.</li>
											    <li>Ev yapımı biber salçası, kuru patlican ve reçel satışlarımız da vardır.</li>
											  </ul>
											</div> 
									</div>
								</div>
			                  
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



