import React from "react";
import {Outlet} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/dashboard">Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/courses">Courses</Nav.Link>
            <Nav.Link href="/addNewCourse">Add new course</Nav.Link>
          </Nav>
          </Container>
        </Navbar> 
        <Outlet />
      </>
    );
};

export default Layout;