import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Dropdown, Icon } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { TutorContext } from '../../../App';

const NavBar = () => {
    const { user, setUser, cart } = useContext(TutorContext);
    const handelLogOut = () => {

        setUser({});
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <div className="navbar-brand">
                    Tutor House
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#tutor-nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="tutor-nav" className="collapse navbar-collapse">
                    <ul className="navbar-nav mb-2 ms-auto">
                        <li className="nav-item me-4">
                            <Link to="/" className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item me-4">
                            <Badge content={cart.length>0?cart.length:''}>
                                <Link to={`/manage/${user?.type}/book`} className="nav-link active">
                                    <Icon icon='shopping-cart' />
                                </Link>
                            </Badge>

                        </li>
                        {
                            user?.email ?
                                (
                                    <li className="nav-item me-4">
                                        <Dropdown title={user.email}>
                                            <Dropdown.Item>
                                                <Link to={`/manage/${user.type}/profile`}>Profile</Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <button onClick={handelLogOut} className="btn btn-success">Log Out</button>
                                            </Dropdown.Item>
                                        </Dropdown>
                                    </li>
                                )
                                :
                                (
                                    <>
                                        <li className="nav-item me-4">
                                            <Link to="/login" className="nav-link">Login</Link>
                                        </li>
                                        <li className="nav-item me-5">
                                            <Link to="/login" className="nav-link">Sign up</Link>
                                        </li>
                                    </>
                                )
                        }

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;