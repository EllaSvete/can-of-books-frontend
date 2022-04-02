import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import Login from './Login';
import Profile from './Profile';
import { withAuth0 } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      userEmail: null,
      show: false
    }
  }

   

  loginHandler = (user) => {
    console.log(user);
    this.setState({
      user: user,
    }, () => console.log(this.state))
  }

  logoutHandler = () => {
    console.log("logout handler called");
    this.setState({
      user: null,
    })
  }

  
  

  render() {
    // console.log(this.state);
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
            {this.props.auth0.isAuthenticated ? <BestBooks updateBook={this.updateBook} bookToUpdate={this.state.bookToUpdate} handleShow={this.handleShow} user={this.state.user} /> : 
              <Login loginHandler={this.loginHandler}></Login> }


              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
            </Route>
            <Route exact path="/profile">

            <Profile user={this.state.user}>

            </Profile>
            </Route>
            
         
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
        
          </Switch>
          <Footer />
          
        </Router>
      </>
    )
  }
}

export default withAuth0(App);

