import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn, logout, user } from '../services/user.service';

const HeaderComponent = () => {
    return ( 
        <nav className="navbar navbar-expand-sm bg-white shadow justify-content-center">

            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">check number</Link>
                </li>
                {
                    isLoggedIn() ?
                    <React.Fragment>
                    <li className="nav-item">
                        <p className="m-0 h-100 p-2">Hello {user().username}</p>
                    </li>
                    <li className="nav-item">
                        <button onClick={logout} className="btn btn-primary">logout</button>
                    </li>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">signup</Link>
                        </li>
                    </React.Fragment>
                }
            </ul>

        </nav>
     );
}
 
export default HeaderComponent;