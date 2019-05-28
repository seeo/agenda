import React, { Component } from 'react';
import { Authenticator } from 'aws-amplify-react';

class Login extends Component {
  render() {
      const {user} = this.props;

    //  if (user){
    //     console.log(user, "console loging user object");
    //     console.log(user.username, "console loging username");
    //      console.log(user.attributes.name, "console loging just name");
    //  }
   // //   console.log(user.username);
    return (
    <React.Fragment>
        {!user && <Authenticator />}
        {user &&
        <p>You are signed in as
            <span style = {{fontWeight: "bold"}}> "{user.attributes.name}" </span>
            on
            <span style = {{fontStyle: "italic"}}> {user.attributes.email} </span>
        </p>}
        <h1>Login</h1>
    </React.Fragment>
    )
  }
}

export default Login;