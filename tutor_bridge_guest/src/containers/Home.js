import React from 'react';
import { Container } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import Slider from 'react-slick';
import Carousel from 'react-multi-carousel';
import { PrevArrow, NextArrow } from '../components/CustomArrow';
import 'react-multi-carousel/lib/styles.css';

const SUBJECT = [
  'Toán',
  'Lý',
  'Hóa',
  'Tin học',
  'Anh văn',
  'Lịch sử',
  'Sinh học',
  'Hóa học'
];
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Home = () => {
  return (
    <>
      <div style={{ height: '50px' }} />
      <div
        className="site-blocks-cover overlay"
        style={{ backgroundImage: `url(${'/images/hero_1.jpg'})` }}
      >
        <Container>
          <div className="row align-items-center">
            <div className="col-12">
              <h1>Tìm gia sư</h1>
              <form action="#">
                <div className="row mb-3">
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-6 mb-3 mb-md-0">
                        <input
                          type="text"
                          className="mr-3 form-control border-0 px-4"
                          placeholder="Tìm theo môn học"
                        />
                      </div>
                      <div className="col-md-6 mb-3 mb-md-0">
                        <input
                          type="text"
                          className="form-control form-control-block search-input  border-0 px-4"
                          placeholder="Tìm theo địa điểm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <input
                      type="submit"
                      className="btn btn-search btn-success btn-block"
                      value="Tìm"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>

      <div className="site-section site-block-feature bg-light">
        <div className="container">
          <div className="text-center mb-5 section-heading">
            <h2>TÌM GIA SƯ THEO CÔNG NGHỆ 4.0</h2>
          </div>

          <div className="d-block d-md-flex border-bottom row">
            <div className="col-4 text-center p-4 item border-right">
              <span className="display-3 mb-3 d-block text-success">
                <i className="fa fa-thumbs-up" />
              </span>
              <h2 className="h4">Chất lượng</h2>
              <p>
                Gia sư được kiểm duyệt kỹ cáng và đánh giá khách quan bởi phụ
                huynh,
              </p>
            </div>
            <div className="col-4 text-center p-4 item border-right">
              <span className="display-3 mb-3 d-block text-success">
                <i className="fa fa-smile-o" />
              </span>
              <h2 className="h4">Linh hoạt</h2>
              <p>Cung cấp dịch vụ linh hoạt, tùy chỉnh dễ dàng.</p>
            </div>
            <div className="col-4 text-center p-4 item">
              <span className="display-3 mb-3 d-block text-success">
                <i className="fa fa-handshake-o" />
              </span>
              <h2 className="h4">Kết nổi trực tiếp</h2>
              <p>
                Kết nối học viên với hàng nghìn gia sư khắp cả nước theo mô hình
                Uber, Grab.
              </p>
            </div>
          </div>
          <div className="d-block d-md-flex row">
            <div className="col-4 text-center p-4 item border-right">
              <span className="display-3 mb-3 d-block text-success">
                <i className="fa fa-graduation-cap" />
              </span>
              <h2 className="h4">Lựa chọn đa dạng</h2>
              <p>
                Gia sư là giảng viên, giáo viên, sinh viên, người nước ngoài,..
              </p>
            </div>
            <div className="col-4 text-center p-4 item border-right">
              <span className="display-3 mb-3 d-block text-success">
                <i className="fa fa-clock-o" />
              </span>
              <h2 className="h4">Nhanh chóng</h2>
              <p>Chỉ mất 2 phút để đăng yêu cần tìm gia sư.</p>
            </div>
            <div className="col-4 text-center p-4 item">
              <span className="display-3 mb-3 d-block text-success">
                <i className="fa fa-money" />
              </span>
              <h2 className="h4">Tùy chọn học phí</h2>
              <p>
                Nhiều gia sư cùng đấu giá học phí, bạn chỉ cần lựa chọn học phí
                phù hợp nhất.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section block-15">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto text-center mb-5 section-heading">
              <h2>Gia sư nổi bật</h2>
            </div>
          </div>
          <Carousel showDots arrows={false} responsive={responsive}>
            {[...Array(10).keys()].map((num, index) => {
              return (
                <div key={index}>
                  <div className="img-border-sm mb-4 text-center">
                    <a href="#" className="image-play">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlc52Qk68ndsvrA0a8BLsc6iqf77wUPYawW_2PIRe9zyZkYAT&s"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <h2 className="text-muted">
                    <a className="text-dark text-center" href="#">
                      Nguyễn Văn A
                    </a>
                  </h2>
                  <span className="mb-3 d-block">
                    <a className="text-muted text-center" href="#">
                      Toán
                    </a>
                  </span>
                  <span className="mb-3 d-block text-danger">200.000vnd</span>
                  <p className="mb-5">
                    Sinh viên năm cuối ngành Ngôn ngữ Anh, Học viện Khoa học
                    Quân sự Có kinh nghiệm dạy tiếng Anh mất gốc, dạy tiếng Anh
                    cấp 2,3
                  </p>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>

      <div className="site-section site-block-feature bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto text-center mb-5 section-heading">
              <h2 className="mb-5">Danh sách môn học</h2>
            </div>
          </div>
          <div className="row">
            {SUBJECT.map((subject, index) => {
              return (
                <div className="col-sm-6 col-md-4 col-lg-3 mb-3" key={index}>
                  <a href="#" className="h-100 feature-item">
                    <span className="d-block icon flaticon-calculator mb-3 text-primary" />
                    <h2>{subject}</h2>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
