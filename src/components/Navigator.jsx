import React, { Component } from 'react';
import {Navbar, Nav, Dropdown, Form, Button, FormControl} from 'react-bootstrap';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

const HomeItems = props =>(
    <React.Fragment>
        <Nav.Link href="#/" active>
            Home
        {/*<BSpan srOnly>(current}</BSpan>*/}
        </Nav.Link>
        <Nav.Link href="#/" active>
            Login
        </Nav.Link>
    </React.Fragment>
)

const LoginItems = props =>(
    <React.Fragment>
        <Nav.ItemLink href="#/">
            Home
    </Nav.ItemLink>
        <Nav.ItemLink href="#/login" active>
            Login
        {/*<BSpan srOnly>(current}</BSpan>*/}
        </Nav.ItemLink>
    </React.Fragment>
)

class Navigator extends Component {
  render() {
    return (
        <Navbar expand = "md" bg="dark" variant="dark" fixed = "top">
            <Navbar.Brand href="#">Agenda</Navbar.Brand>
            <Navbar.Toggle aria-controls = "navbarExampleDefault" />
            <Navbar.Collapse id="navbarExampleDefault">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
            </Navbar.Collapse>

            <Router>

            {/*Case where user is signed in*/}
            <Nav className="drop-down">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Account
                        </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>;
            </Nav>

            {/*Case where user is signed out*/}


            </Router>

        </Navbar>
    )
  }
}

export default Navigator;
