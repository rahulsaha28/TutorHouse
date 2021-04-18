import React from 'react';
import { useParams } from 'react-router';
import AddService from '../../AdminManagement/AddService/AddService';
import MakeAdmin from '../../AdminManagement/MakeAdmin/MakeAdmin';
import ManageService from '../../AdminManagement/ManageService/ManageService';
import OrderList from '../../AdminManagement/OrderList/OrderList';
import Book from '../../UserManageMent/Book/Book';
import BookingList from '../../UserManageMent/BookingList/BookingList';
import Review from '../../UserManageMent/Review/Review';
import SideNav from '../SideNav/SideNav';


const Management = () => {
    const { type, management } = useParams();
    let newmanagement;
    

    if (type === "user") {
        switch (management) {
            case "book":
                newmanagement = <Book />;
                break;
            case "bookingList":
                newmanagement = <BookingList />
                break;
            case "review":
                newmanagement = <Review />
                break;
            default:
                newmanagement = <Book />
        }
    }
    if (type === "admin") {
        
        switch (management) {
            case "order-list":
                newmanagement = <OrderList />;
                break;
            case "add-service":
                newmanagement = <AddService />
                break;
            case "make-admin":
                newmanagement = <MakeAdmin />
                break;
            case "manage-service":
                newmanagement = <ManageService />
                break;
            default:
                newmanagement = <Book />
        }
    }

    return (
        <section>
            <div className="row mb-3">
                <div className="col-md-4">
                    <SideNav />
                </div>
                <div className="col-md-8">
                    {
                        newmanagement
                    }
                </div>
            </div>
        </section>
    );
};

export default Management;