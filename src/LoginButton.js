import React from 'react';

import Button from 'react-bootstrap/Button';
import { useAuth0 } from "@auth0/auth0-react";


const LoginButton = (props) => {

  const { loginWithRedirect } = useAuth0();



  const handleClick = (e) => {

    loginWithRedirect();
  }



  /* TODO: Render a button with label 'Log In'. When the button is clicked then show LoginForm instead */
  return (
    <div>
      <Button onClick={handleClick}>Login</Button>


    </div>

  )
}

export default LoginButton;

