import React from 'react';
import LogoutButton from './LogoutButton';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem>
          <Link to="/" className="nav-link">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/profile" className="nav-link">Profile</Link>
        </NavItem>
        {this.props.renderLogoutUrl &&
           <NavItem>
            <a href={this.props.logoutUrl} className="nav-link">Logout</a>
           </NavItem>
        }
        {this.props.user ? <NavItem><LogoutButton/></NavItem> : " "}
        {/* TODO: if the user is logged in, render a navigation link to profile page */}
        {/* TODO: if the user is logged in, render the `LogoutButton` */}
      </Navbar>
    )
  }
}

export default Header;
