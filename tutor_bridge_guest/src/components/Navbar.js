import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Button,
  DropdownButton,
  Dropdown
} from 'react-bootstrap';
import DropdownMenu from './DropdownMenu';

const NavigationBar = () => {
  return (
    <div className="site-navbar-wrap bg-white">
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand href="/">
            <h2>
              Tutor<strong className="font-weight-bold">Bridge</strong>
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-between"
          >
            <Nav className="mx-2">
              <NavDropdown
                title={
                  <span>
                    <i className="fa fa-th-large" />
                    &nbsp;Danh mục
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#">Category</NavDropdown.Item>
                <NavDropdown.Item href="#">Browse Candidates</NavDropdown.Item>
                <NavDropdown.Item href="#">Post a Job</NavDropdown.Item>
                <NavDropdown.Item href="#">Employeer Profile</NavDropdown.Item>
                <NavDropdown
                  title="For Employees"
                  id="basic-nav-dropdown-right"
                  drop="right"
                  className="pl-3"
                >
                  <NavDropdown.Item href="#">Category</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Browse Candidates
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">Post a Job</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Employeer Profile
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
            </Nav>
            <Nav>
              <Button variant="success" className="mx-2">
                Đăng nhập
              </Button>
              <Button variant="outline-success" className="mx-2">
                Đăng kí
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavigationBar;
