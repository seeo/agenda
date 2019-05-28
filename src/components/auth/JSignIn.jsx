import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Auth} from 'aws-amplify';

class JSignIn extends Component {
    constructor(props){
        super(props);
        this.signIn = this.signIn.bind(this);
    }

signIn(){
    //username and password are the required defaualt inputs required by amplify,
    const {username, password} = this.inputs;
    Auth.signIn(username, password)
        .then(user => this.signInSuccess(user))
        //throw error to user if sign in fail
        .catch(error=>this.signInError(error));
}

render(){
    return (
        <Button light outline sm border ="0" onClick={this.signIn}>Sign In</Button>
        )
    }
}

export default JSignIn;
