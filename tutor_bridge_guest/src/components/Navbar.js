import React from 'react';
import {
  Navbar,
  Nav,
  Container,
  NavDropdown
} from 'react-bootstrap';

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
            <div class="has-children">
              <a className="nav-link text-muted" href="/#"><span><i className="fa fa-th-large" />
                &nbsp;Danh mục
                  </span></a>
              <ul class="dropdown arrow-top">
                <li><a href="/#">Apartments</a></li>
                <li><a href="/#">Rooms</a></li>
                <li><a href="/#">Suites</a></li>
                <li class="has-children">
                  <a href="/#">Sub Menu&emsp;<i class="fa fa-caret-right"></i></a>
                  <ul class="dropdown">
                    <li><a href="/#">Menu One</a></li>
                    <li><a href="/#">Menu Two</a></li>
                    <li><a href="/#">Menu Three</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            {true ? (
              <Nav>
                <span className="mx-2 my-auto">Username</span>
                <NavDropdown
                  title={
                    <div className="pull-left">
                      <img width={50}
                        src={'https://jetsport.com.au/assets/backend/images/default-avatar.png'}
                        alt=""
                      />
                    </div>
                  }
                  id="basic-nav-dropdown">
                  {true ? (
                    <>
                      <NavDropdown.Item href="/#">Cập nhật thông tin</NavDropdown.Item>
                      <NavDropdown.Item href="/#">Đăng kí gia sư</NavDropdown.Item>
                      <NavDropdown.Item href="/profile">Lớp đã đăng kí</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item >Đăng xuất</NavDropdown.Item>
                    </>
                  ) : (
                      <>
                        <NavDropdown.Item href="/#">Cập nhật thông tin</NavDropdown.Item>
                        <NavDropdown.Item href="/#">Đổi mật khẩu</NavDropdown.Item>
                        <NavDropdown.Item href="/profile">Yêu cầu dạy học</NavDropdown.Item>
                        <NavDropdown.Item href="/profile">Thống kê doanh thu</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item >Đăng xuất</NavDropdown.Item>
                      </>
                    )}
                </NavDropdown>
              </Nav>
            ) : (
                <Nav>
                  <a className="btn btn-outline-success mx-1" href='/login'>
                    Đăng nhập
              </a>
                  <a className="btn btn-success mx-1" href='/signup'>
                    Đăng kí
              </a>
                </Nav>
              )}

          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div >
  );
};

export default NavigationBar;
