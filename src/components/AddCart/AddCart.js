import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { Icon } from 'rsuite';
import { TutorContext } from '../../App';
import { serverURL } from '../Config/Config';
import Payment from '../Payment/Payment';
import './AddCart.css';

const AddCart = () => {
    const { id } = useParams();
    const { cart, setCart } = useContext(TutorContext);

    useEffect(() => {
        fetch(`${serverURL}product`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id })
        })
            .then(res => res.json())
            .then(data => {
                setCart([data.product])
            })

    }, [id])

    const handelDeleteCart = () => {
        setCart([]);
    }
    return (
        <div className="row p-5">
            <div className="add-cart col-md-5 mb-5">
                <div className="row d-flex align-items-center">
                    {
                        cart.length > 0 ?
                            (
                                <>
                                    <div className="col-md-3">
                                        <img style={{ width: "100px", height: "100px", borderRadius: ".4rem" }} src={cart[0].imageURL} alt="" />
                                    </div>
                                    <div className="col-md-3">
                                        {cart[0].title}
                                    </div>
                                    <div className="col-md-3">
                                        {cart[0].price}
                                    </div>
                                    <div className="col-md-3">
                                        <button className="btn" onClick={handelDeleteCart}>
                                            <Icon icon="close" />
                                        </button>
                                    </div>
                                </>
                            )
                            :
                            (<div>No item selected</div>)
                    }
                </div>

            
            </div>

            {/* this is the form */}
            <div className="col-md-6 ms-2">
                <Payment/>
            </div>
        </div>
    );
};

export default AddCart;