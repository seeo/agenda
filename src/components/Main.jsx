import React, { Component } from 'react';
import { Container} from 'react-bootstrap';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import {Hub, Auth} from 'aws-amplify';

class Main extends Component {

    constructor(props) {
        super(props);
        this.loadUser = this.loadUser.bind(this);
        Hub.listen('auth', this, 'Navigator'); // Add this component as listener of auth event.
        this.state = { user: null }
    }

    componentDidMount(){
        this.loadUser(); //check user's loggedin state just before page renders
    }

    loadUser(){
        Auth.currentAuthenticatedUser()
            .then(user=>this.setState({user: user}))
            .catch(error=>this.setState({user: null}));
    }

    // Hub.listen('auth', this.loadUser); this is prefferable because onHubCapsule is being deprecated already
    onHubCapsule(capsule){
        this.loadUser(); //this triggers every time user signs in and signs out
    }

  render() {
    const {user} = this.state;

    return (
      <Container as="main" role="main">
        <div className="starter-template">
         <Router>
            <Switch>
                {/*<Route exact path="/" component={Home} />*/}
                <Route exact path="/"
                render={(props) => <Home user={user} />}
                />
                {/*<Route exact path="/login" component={Login} /> */}
                <Route exact path="/login"
                render={(props) => <Login user={user} />}
                />
            </Switch>
         </Router>
        </div>
      </Container>
    )
  }
}

export default Main;
