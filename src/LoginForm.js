import { Component } from "react";
import Form from "react-bootstrap/Form";

class LoginForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let email = { email: e.target.email.value }
    this.props.loginHandler(email)
  }

  render() {
    /* TODO: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */

    return (
      <Form onSubmit={this.handleSubmit}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </Form>

    );
  }
};

export default LoginForm;