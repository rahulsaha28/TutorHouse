import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Nav, Sidenav } from 'rsuite';
import { TutorContext } from '../../../App';

const SideNav = () => {
    const { user } = useContext(TutorContext);
    return (
        <Sidenav>
            <Sidenav.Body>
                <Nav>
                    {/* this is user nav */}
                    {
                        user.type === 'user' ?
                            (
                                <>
                                <Link to="/manage/user/book">
                                    <Nav.Item>
                                        <Icon icon="shopping-cart" /> Book
                                    </Nav.Item>
                                </Link>


                                <Link to="/manage/user/bookingList">
                                    <Nav.Item>
                                        <Icon icon="list-alt" /> Booking List
                                    </Nav.Item>
                                </Link>


                                <Link to="/manage/user/review">
                                    <Nav.Item>
                                        <Icon icon="comment" /> Review
                                    </Nav.Item>
                                </Link>
                                </>
                            )
                            :
                            (
                                <>
                                {/* this is admin nav */}
                                <Link to="/manage/admin/order-list">
                                    <Nav.Item>
                                        <Icon icon="list-alt" /> Order List
                                    </Nav.Item>
                                </Link>

                                <Link to="/manage/admin/add-service">
                                    <Nav.Item>
                                        <Icon icon="plus" /> Add Service
                                    </Nav.Item>
                                </Link>

                                <Link to="/manage/admin/make-admin">
                                    <Nav.Item>

                                        <Icon icon="user-plus" /> Make Admin
                                    </Nav.Item>
                                </Link>

                                <Link to="/manage/admin/manage-service">
                                    <Nav.Item>
                                        <Icon icon="cogs" /> Manage Service

                                    </Nav.Item>
                                </Link>
                                </>
                            )
                    }






                </Nav>
            </Sidenav.Body>
        </Sidenav>
    );
};

export default SideNav;