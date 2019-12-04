import React from 'react'

const Login = () => {
    return (
        <div style={{ background: '#f2f2f2' }}>
            <div className="auth mt-5">
                <div className="col-lg-4 col-md-8 p-5 mx-auto border rounded-lg bg-light">
                    <h1 className="text-center">Đăng nhập</h1>
                    <form action="" method="post">
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
                            <button type="submit" className="btn btn-lg btn-primary btn-block">Đăng nhập</button>
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
            </div>
        </div>
    )
}

export default Login;