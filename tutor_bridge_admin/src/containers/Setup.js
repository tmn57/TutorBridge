import React from 'react'

const Setup = () => {
    return (
        <div className="login-box mx-auto align-middle">
            <div className="login-logo">
                <a href="/" className="brand-link text-center">
                    <h2>
                        Tutor<strong className="font-weight-bold">Bridge</strong>
                    </h2>
                </a>
            </div>
            <div className="card">
                <div className="card-body login-card-body">
                    <p className="login-box-msg">Setup root admin</p>

                    <form action="" method="post">
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Root password" />
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

                    <p className="mb-1">
                        <a href="forgot-password.html">I forgot my password</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Setup;