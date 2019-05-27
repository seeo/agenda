import React, { Component } from 'react';

import { Authenticator } from 'aws-amplify-react';


class Login extends Component {
  render() {
    return (
    <div>
        <Authenticator />
        <h1>Login</h1>
    </div>
    )
  }
}

export default Login;