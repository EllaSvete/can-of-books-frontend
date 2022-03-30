import { Component } from "react";

class Profile extends Component {
componentDidMount() {
  console.log(this.props);
}
  render() {
    /* TODO: render information about logged in user */
    /* STRETCH TODO: if no logged in user then redirect home */
    if (this.props.user) {
      return (
        <>
        <p>email: {this.props.user.email}</p>
        <p>username: {this.props.user.username}</p>
        </>
      )

    } else {
      return (
        <p>No user found</p>
      )
    }
  }
};

export default Profile;
