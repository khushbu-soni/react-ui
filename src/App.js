import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
// import CarouselSlide from './Component/Slider';

import './App.css';
import ControlledCarousel from './Component/ControlledCarousel';





class App extends Component {
  
  state = {
    loggedIn: false,
    username:"khushi",
    password:"12345"
  };

  render() {
    if(this.state.username=='khushi' && this.state.password=='12345')
      this.state.loggedIn=true;

    var isLoggedIn = this.state.loggedIn;
    var htmlText = <h1>Test</h1>;
    
    if (isLoggedIn) {
      htmlText= 
      <React.Fragment>
      <Router basename="/react-auth-ui/">
      <div className="App">
        <div className="App__Aside"><div class="carousel-container">
          <ControlledCarousel/>
          
          {/* {htmlText} */}
          </div></div>
        <div className="App__Form">
          <h3 className="FormTitle__Link">Track on Tress</h3>
          <div className="PageSwitcher">
              <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
              <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
            </div>

            <div className="FormTitle">
                <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
            </div>

            <Route exact path="/" component={SignUpForm}>
            </Route>
            <Route path="/sign-in" component={SignInForm}>
            </Route>
        </div>

      </div>
    </Router>
    </React.Fragment>
    }else{
      htmlText=<h1>Else Hi</h1>
    }


    return (
      <div>dangerouslySetInnerHTML={htmlText}</div>
    //  {htmlText}
    );
  }
}

export default App;
