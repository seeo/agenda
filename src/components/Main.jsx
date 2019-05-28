import React, { Component } from 'react';
import { Container} from 'react-bootstrap';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile'

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

  render() {
    // if(user){
    //     const {user} = this.state;
    // }
    //pass current user state to children pages
    return (
      <Container as="main" role="main">
        <div className="starter-template">
         <Router>
            <Switch>
                {/*<Route exact path="/" component={Home} />*/}
                <Route exact path="/"
                render={(props) => <Home user={this.user} />}
                />
                <Route exact path="/profile"
                render={(props) => <Profile user={this.user} />}
                />
                {/*<Route exact path="/login" component={Login} /> */}
                <Route exact path="/login"
                render={(props) => <Login user={this.user} />}
                />
            </Switch>
         </Router>
        </div>
      </Container>
    )
  }
}

export default Main;
