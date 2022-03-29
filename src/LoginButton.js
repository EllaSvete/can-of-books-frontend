import { Component } from 'react';
import LoginForm from './LoginForm';
import Button from 'react-bootstrap/Button';


export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonShow: true
    }
  }

  handleClick = (e) => {
    this.setState({
      buttonShow: false
    })
  }

  render() {

    /* TODO: Render a button with label 'Log In'. When the button is clicked then show LoginForm instead */
    return (
      <div>
    {this.state.buttonShow ? <Button onClick={this.handleClick}>Login</Button> : <LoginForm loginHandler={this.props.loginHandler}/>}
    </div>

    )
  }
}
