import React from 'react';
import {
    Form
} from 'react-bootstrap';

const Signup = () => {
    return (
        <div style={{ background: '#f2f2f2' }}>
            <div className="auth mt-5">
                <div className="col-lg-4 col-md-8 p-5 mx-auto border rounded-lg bg-light">
                    <h1 className="text-center">Đăng kí</h1>
                    <form action="/examples/actions/confirmation.php" method="post">
                        <div className="form-group d-flex justify-content-between mx-5 px-5">
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
                            <button type="submit" className="btn btn-lg btn-primary btn-block">Đăng kí</button>
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
            </div>
        </div>
    )
}

export default Signup