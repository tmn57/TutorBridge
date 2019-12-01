import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Button,
  Modal,
  Tabs, Tab, Form
} from 'react-bootstrap';

const NavigationBar = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('login')

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
              <Button variant="success" className="mx-1" onClick={() => {
                setActiveTab('login')
                setOpen(true)
              }
              }>
                Đăng nhập
              </Button>
              <Button variant="outline-success" className="mx-1" onClick={() => {
                setActiveTab('signup')
                setOpen(true)
              }
              }>
                Đăng kí
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>

      <Modal
        size="md"
        show={isOpen}
        onHide={() => setOpen(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className="modal-login"
        centered={true}
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Tabs defaultActiveKey={activeTab} id="uncontrolled-tab-example">
            <Tab eventKey="login" title="Đăng nhập">
              <div className="col-10 mx-auto mt-5">
                <form action="/examples/actions/confirmation.php" method="post">
                  <div className="form-group">
                    <div className="input-group">
                      <input type="text" className="form-control" name="email" placeholder="Email" required="required" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="text" className="form-control" name="password" placeholder="Mật khẩu" required="required" />
                    </div>
                  </div>
                  <p className="text-right"><a href="/#">Quên mật khẩu?</a></p>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Đăng nhập</button>
                  </div>
                  <p className="text-center text-muted">OR</p>
                  <div className="dropdown-divider"></div>
                  <div className="form-group ">
                    <button className="loginBtn loginBtn--facebook">
                      <span className="text-white">Đăng nhập bằng Facebook</span>
                    </button>

                  </div>
                  <div className="form-group">
                    <button className="loginBtn loginBtn--google">
                      <span className="text-white">Đăng nhập bằng Google</span>
                    </button>
                  </div>
                </form>
              </div>
            </Tab>
            <Tab eventKey="signup" title="Đăng kí">
              <div className="col-10 mx-auto mt-5">
                <form action="/examples/actions/confirmation.php" method="post">
                  <div className="form-group d-flex justify-content-between">
                    <Form.Check
                      inline
                      type="radio"
                      label="Giáo viên"
                      name="type"
                      checked
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label="Học sinh"
                      name="type"
                    />
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="text" className="form-control" name="name" placeholder="Họ tên" required="required" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="text" className="form-control" name="email" placeholder="Email" required="required" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="text" className="form-control" name="phone" placeholder="Số điện thoại" required="required" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="text" className="form-control" name="password" placeholder="Mật khẩu" required="required" />
                    </div>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Đăng kí</button>
                  </div>
                  <p className="text-center text-muted">OR</p>
                  <div className="dropdown-divider"></div>
                  <div className="form-group ">
                    <button className="loginBtn loginBtn--facebook">
                      <span className="text-white">Đăng kí bằng Facebook</span>
                    </button>

                  </div>
                  <div className="form-group">
                    <button className="loginBtn loginBtn--google">
                      <span className="text-white">Đăng kí bằng Google</span>
                    </button>
                  </div>
                </form>
              </div>
            </Tab>
          </Tabs>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NavigationBar;
