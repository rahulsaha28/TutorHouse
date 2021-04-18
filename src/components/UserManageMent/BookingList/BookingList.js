
import React, { useContext, useEffect, useState } from 'react';
import { TutorContext } from '../../../App';
import { serverURL } from '../../Config/Config';
import CardLoading from '../../utility/LoadingSystem/CardLoading';

const BookingList = () => {
    const [carts, setCarts] = useState([]);
    const { user } = useContext(TutorContext);
    
    useEffect(()=>{
        fetch(`${serverURL}cart`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email:user.email})
        })
        .then(res=>res.json())
        .then(result=>setCarts(result.cart))
    }, [])

    // style
    const allStatus = [
        {
            "status": "Pending",
            "color": "#EA6C79"
        },
        {
            "status": "On Going",
            "color": "yellow"
        },
        {
            "status": "Done",
            "color": "#2589F5"
        }

    ]
    
    return (
        <div>
            <div className="row">
                {
                    carts?.length>0?
                    (
                        carts && 
                        carts.map(cart=>{
                            return (
                                <div key={Math.random()} className="col-md-3 mb-3">
                                    <div className="card">
                                        <div className="d-flex justify-content-between align-items-top">
                                            <img style={{ width:"100px", height:"100px" }} src={cart.products[0].imageURL} alt=""/>
                                            <div className="p-3 text-center" style={ { backgroundColor: `${allStatus.find(result => result.status === cart.status).color}`, color:"#fff", height:"40px" } }> {cart.status }</div>
                                        </div>
                                        <div className="card-body">
                                          <h5 className="card-title">{ cart.products[0].price } TK</h5> 
                                          <p className="card-text">{ cart.date }</p> 
                                        </div>
                                        
                                    </div>
                                </div>
                            )
                        })  
                    )
                    :
                    (
                        <CardLoading/>
                    )
                    
                }
                
            </div>
        </div>
    );
};

export default BookingList;