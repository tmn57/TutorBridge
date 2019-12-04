import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3 className="footer-heading mb-3 text-white">TutorBridge</h3>
            <ul className="list-unstyled">
              <li>
                <a href="/#">Thông tin</a>
              </li>
              <li>
                <a href="/#">Liên hệ</a>
              </li>
              <li>
                <a href="/#">Tuyển dụng</a>
              </li>
              <li>
                <a href="/#">Chính sách và điều khoản</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="footer-heading mb-4 text-white">Dành cho học viên</h3>
            <ul className="list-unstyled">
              <li>
                <a href="/#">Đăng yêu cầu tìm gia sư</a>
              </li>
              <li>
                <a href="/#">Xem danh sách gia sư</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="footer-heading mb-4 text-white">Dành cho gia sư</h3>
            <ul className="list-unstyled">
              <li>
                <a href="/#">Trở thành gia sư</a>
              </li>
              <li>
                <a href="/#">Danh sách lớp mới</a>
              </li>
              <li>
                <a href="/#">Thông tin hướng dẫn</a>
              </li>
              <li>
                <a href="/#">Chính sách dịch vụ</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="footer-heading mb-3 text-white">Liên kết</h3>
            <p>
              <a href="/#" className="p-2">
                <i className="fa fa-facebook" />
              </a>
              <a href="/#" className="p-2">
                <i className="fa fa-twitter" />
              </a>
              <a href="/#" className="p-2">
                <i className="fa fa-instagram" />
              </a>
              <a href="/#" className="p-2">
                <i className="fa fa-vimeo" />
              </a>
            </p>
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
