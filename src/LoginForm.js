import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class LoginForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let user = { email: e.target.formBasicEmail.value, 
    username: e.target.formBasicUsername.value }
    console.log(user);
    this.props.loginHandler(user)
  }

  render() {
    /* TODO: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>username</Form.Label>
          <Form.Control type="username" placeholder="Enter username" />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>

    );
  }
};

export default LoginForm;