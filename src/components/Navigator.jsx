import React, { Component } from 'react';
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
// import {SignOut, Greetings} from 'aws-amplify-react';
import JSignOut from './auth/JSignOut';
import { Hub, Auth } from 'aws-amplify';

const ProfileItems = props =>(
    <React.Fragment>
        <Nav.Link href = "/">
            Home
        </Nav.Link>
        <Nav.Link href = "/profile" active>
            Profile
        </Nav.Link>
        <Nav.Link href = "/login">
            Login
        </Nav.Link>
    </React.Fragment>
)

const HomeItems = props =>(
    <React.Fragment>
        <Nav.Link href = "/" active>
            Home
        </Nav.Link>
        <Nav.Link href="/profile">
            Profile
        </Nav.Link>
        <Nav.Link href = "/login">
            Login
        </Nav.Link>
    </React.Fragment>
)

const LoginItems = props =>(
    <React.Fragment>
        <Nav.Link href = "/">
            Home
        </Nav.Link>
        <Nav.Link href="/profile">
            Profile
        </Nav.Link>
        <Nav.Link href = "/login" active>
            Login
        </Nav.Link>
    </React.Fragment>
)

class Navigator extends Component {
    constructor(props) {
        super(props);
        this.loadUser = this.loadUser.bind(this);
        Hub.listen('auth', this, 'Navigator'); // Add this component as listener of auth event.
        this.state = { user: null }
    }

    componentDidMount() {
        this.loadUser(); //check user's loggedin state just before page renders
    }

    loadUser() {
        Auth.currentAuthenticatedUser()
            .then(user => this.setState({ user: user }))
            .catch(error => this.setState({ user: null }));
    }

    // Hub.listen('auth', this.loadUser); this is prefferable because onHubCapsule is being deprecated already
    onHubCapsule(capsule) {
        this.loadUser(); //this triggers every time user signs in and signs out
    }

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
                            <Route exact path="/profile" component={ProfileItems} />
                        </Switch>
                    </Router>
                </Nav>
                <Navbar.Text>Greetings</Navbar.Text>
                {/*<SignOut /> */}
                {this.user && <JSignOut />}
            </Navbar.Collapse>
        </Navbar>
    )
  }
}

export default Navigator;
