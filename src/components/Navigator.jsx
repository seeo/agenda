import React, { Component } from 'react';
import {Navbar, Nav, Dropdown, Form, Button, FormControl} from 'react-bootstrap';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import {SignOut} from 'aws-amplify-react';

const HomeItems = props =>(
    <React.Fragment>
        <Nav.Link href="/" active>
            Home
        {/*<BSpan srOnly>(current}</BSpan>*/}
        </Nav.Link>
        <Nav.Link href="/login">
            Login
        </Nav.Link>
    </React.Fragment>
)

const LoginItems = props =>(
    <React.Fragment>
        <Nav.Link href="/">
            Home
        </Nav.Link>
        <Nav.Link href="/login" active>
            Login
        {/*<BSpan srOnly>(current}</BSpan>*/}
        </Nav.Link>
    </React.Fragment>
)

class Navigator extends Component {
  render() {
    return (
        <Navbar expand = "md" bg="dark" variant="dark" fixed = "top">
            <Navbar.Brand href="#">Agenda</Navbar.Brand>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
            <Navbar.Toggle aria-controls = "navbarExampleDefault" />
            <Navbar.Collapse id="navbarExampleDefault">
                <Nav mr = "auto">
                    <Router>
                        <Switch>
                            <Route exact path="/" component={HomeItems} />
                            <Route exact path="/login" component={LoginItems} />
                        </Switch>
                    </Router>
                </Nav>
                <Navbar.Text>Greetings</Navbar.Text>
                <SignOut />
            </Navbar.Collapse>
        </Navbar>
    )
  }
}

export default Navigator;
