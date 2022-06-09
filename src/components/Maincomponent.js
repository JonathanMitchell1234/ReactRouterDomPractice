import React from 'react';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import About from "./AboutComponent";
import Home from "./HomeComponent";
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';

function Main () {
  return (
		<React.Fragment>
            <Header />
			<Switch>
				<Route path="/home component" component={Home} />
				<Route path="/about component" component={About} />
				<Redirect to= '/home'/>
			</Switch>

			
			
			<Footer />
		</React.Fragment>
  );
}

export default withRouter(Main);