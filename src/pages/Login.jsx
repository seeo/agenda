import React, { Component } from 'react';
import { Authenticator, SignIn } from 'aws-amplify-react';

// import JSignIn from '../components/auth/JSignIn';

//hide the default amplify signin, implement our custom signIn
/*const CustomAuthenticator = props => (
    <Authenticator hideDefault = {[SignIn]}>
        <JSignIn override = {[SignIn]}/>
    </Authenticator>
) */

class Login extends Component {
  render() {
    const {user} = this.props;

    if (this.user){
        console.log(this.user, "console loging user object");
        console.log(user.username, "console loging username");
         console.log(user.attributes.name, "console loging just name");
     }
   //   console.log(user.username);
    return (
    <div>
        {!this.user && <Authenticator />}
        {this.user &&
        <p>You are signed in as
            <span style = {{fontWeight: "bold"}}> "{user.attributes.name}" </span>
            on
            <span style = {{fontStyle: "italic"}}> {user.attributes.email} </span>
        </p>}
    </div>
    )
  }
}

export default Login;