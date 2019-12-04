import React from 'react'

const Login = () => {
    return (
        <div className="login-box mx-auto my-auto">
            <div className="login-logo">
                <a href="/" className="brand-link text-center">
                    <h2>
                        Tutor<strong className="font-weight-bold">Bridge</strong>
                    </h2>
                </a>
            </div>
            <div className="card">
                <div className="card-body login-card-body">
                    <p className="login-box-msg">Sign in to start your session</p>

                    <form action="../../index3.html" method="post">
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fa fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fa fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div className="input-group">
                            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                        </div>
                    </form>

                    <div className="social-auth-links text-center mb-3">
                        <p>- OR -</p>
                        <a href="/#" className="btn btn-block btn-primary">
                            <i className="fa fa-facebook mr-2"></i> Sign in using Facebook
        </a>
                        <a href="/#" className="btn btn-block btn-danger">
                            <i className="fa fa-google-plus mr-2"></i> Sign in using Google+
        </a>
                    </div>


                    <p className="mb-1">
                        <a href="forgot-password.html">I forgot my password</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;