import React from 'react'
import '../../Style/Style.css'
const Login = () => {
    return (
        <>
            <div className="row">
                <div className="main-login col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4">
                    <div className="logo margin-top-30">
                        <h2>Admin Login</h2>
                    </div>
                    <div className="box-login">
                        <form className="form-login">
                            <fieldset>
                                <legend className=''>
                                    Sign in to your account
                                </legend>

                                <p>
                                    Please enter your name and password to log In.<br />
                                    <span></span>
                                </p>
                                <div className="form-group">
                                    <span className="input-icon d-flex ">
                                        <i className="fa fa-user text-primary mr-2 d-flex align-items-center" /><input type="text" className="form-control" name="username" placeholder="Username" />
                                    </span>
                                </div>
                                <div className="form-group form-actions">
                                    <span className="input-icon d-flex">
                                        <i className="fa fa-lock text-primary d-flex align-items-center mr-2" /><input type="password" className="form-control password" name="password" placeholder="Password" />
                                    </span>
                                </div>
                                <div className="form-actions">
                                    <button type="submit" className="btn btn-primary pull-right" name="submit">
                                        Login <i className="fa fa-arrow-circle-right " />
                                    </button>
                                </div>
                                <a href="" className=''>Back to Home Page</a>
                            </fieldset>
                        </form>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Login