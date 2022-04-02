import React from "react";
import { useAuth0 } from "@auth0/auth0-react";



const Profile = () => {
  //  componentDidMount() {
  //   console.log(this.props);
  // }
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);


  /* TODO: render information about logged in user */
  /* STRETCH TODO: if no logged in user then redirect home */

  if (isLoading) {
   return <p>Loading User</p>
  }
  
  return (
    isAuthenticated && (
      <>
        <p>email: {user.email}</p>
        <p>username: {user.username}</p>
      </>

    ))





};

export default Profile;
