import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    }
    else {
        return { color: "#fff" };
    }
};

const Menu = ({ history }) => {
    return (
        <div>
            <ul className="nav nav-tabs bg-primary">
                <li className="nav-item">
                    <Link className="nav-link" style={isActive(history, "/")} to="/">
                        Anasayfa
            </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" style={isActive(history, "/signin")} to="/signin">
                        Giriş yap
            </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" style={isActive(history, "/signup")} to="/signup">
                        Kayıt ol
            </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" style={isActive(history, "/dashboard")} to="/dashboard">
                        Dashboard
            </Link>
                </li>

            </ul>
        </div>
    );
};

export default withRouter(Menu);