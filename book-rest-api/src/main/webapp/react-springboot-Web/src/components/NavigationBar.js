import React from 'react';

import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


class NavigationBar extends React.Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark">
                <Link to={""} className="navbar-brand">
                <img src="/logo.png" alt="brand" width="30" height="30"/>
                </Link>
            <Navbar.Brand href="/"></Navbar.Brand>
            <Nav className="mr-auto">
              <Link to={"add"} className="nav-link">Add Book</Link>
              <Link to={"list"} className="nav-link">Book List</Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
        )
    }
}

export default NavigationBar;