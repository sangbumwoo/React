import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export interface ILayoutComponentProps {}

const LayoutComponent: React.FunctionComponent<ILayoutComponentProps> = (props) => {
    return (
        <div className='container'>
            <button className="btn btn-primary">aaaa</button>

            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">
                        Navbar
                    </a> */}
                    <Link className="navbar-brand" to="/">
                        <img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24" />
                        Navbar
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    /about
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about/33">
                                    /about/33
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/todo">
                                    /todo
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/todo-with-recoil">
                                    /todo-with-recoil
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/about/33">About/33</Link>
                    </li>
                    <li>
                        <Link to="/todo">Todo</Link>
                    </li>
                    <li>
                        <Link to="/todo-with-recoil">todo-with-recoil</Link>
                    </li>
                </ul>
            </nav> */}

            <hr />
            <Outlet />
        </div>
    );
};

export default LayoutComponent;
