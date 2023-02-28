import React from "react";
import {Outlet} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../index.css';
import Card from 'react-bootstrap/Card';


const Layout = () => {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container className="myMargin">
          <Navbar.Brand href="/dashboard">Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/courses">Courses</Nav.Link>
            <Nav.Link href="/addNewCourse">Add new course</Nav.Link>
          </Nav>
          </Container>
        </Navbar> 
        <Outlet />

        <Card.Footer className="text-center" style={{ marginLeft: '30px', marginBottom: '40px', marginRight: '30px', borderRadius:0, border:'none', backgroundColor:'#f8f9fa' }}>
          <Card.Body>
            <Card.Text>Made with <img src="" alt="" /> love in Athens, Greece</Card.Text>
          </Card.Body>
        </Card.Footer>
      </>
    );
};

export default Layout;