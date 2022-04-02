import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import Login from './Login';
import Profile from './Profile';
import UpdateBookForm from './UpdateBookForm';
import {Modal, Button} from 'react-bootstrap';
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
      show: false,
      bookToUpdate: {}
    }
  }

   handleClose = () => this.setState({ show: false })

   handleShow = () => this.setState({ show: true })

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

  updateBook = (book) => {
    this.setState ({
      bookToUpdate: book
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
          <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateBookForm bookToUpdate={this.state.bookToUpdate}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </Router>
      </>
    )
  }
}

export default withAuth0(App);

