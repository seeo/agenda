import React, { Component } from 'react';
import { Container} from 'react-bootstrap';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';

class Main extends Component {
  render() {
    return (
      <Container as="main" role="main">
        <div className="starter-template">
         <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
            </Switch>
         </Router>
        </div>
      </Container>
    )
  }
}

export default Main;
