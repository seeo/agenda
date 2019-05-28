import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Auth} from 'aws-amplify';

class JSignOut extends Component {
    constructor(props){
        super(props);
        this.signOut = this.signOut.bind(this);
    }

signOut(){
    Auth.signOut();
}

render(){
    return (
        <Button light outline sm border ="0" onClick={this.signOut}>Sign Out</Button>
        )
    }
}

export default JSignOut;
