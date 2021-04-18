import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { Message } from 'rsuite';
import { TutorContext } from '../../App';
import { serverURL } from '../Config/Config';
import { EditMessage } from '../utility/Message';

const StripePayment = () => {

    const history = useHistory();

    // cart
    const {cart, user, setCart} = useContext(TutorContext);

    // for stripe
    const stripe = useStripe();
    const element = useElements();

    // for form
    const { register, handleSubmit, formState:{errors} } = useForm();


    const handelOnCheckOut = async(data) => {
       

        const cardElement = element.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement
        })

        
        if(data && cart && paymentMethod){
            const newCart = { ...data, products:cart, email:user.email } 

            fetch(`${serverURL}cart/add`, {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(newCart)
            })
            .then(res=>res.json())
            .then(result=>{
                setCart([]);
                result?.success?EditMessage('success', result.success):EditMessage('error', result.error)
                history.replace('/');
            })
            
        }
        else{

        }

        console.log(paymentMethod)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handelOnCheckOut)}>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Address</label>
                    <input {...register('address', { required:true })} type="text" className="form-control" />
                    {errors.address && <Message type="error" description="Address is required"/>}
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Mobile No</label>
                    <input {...register('mobile', {required:true})} type="Number" className="form-control" />
                    {errors.mobile && <Message type="error" description="Mobile No is required"/>}
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Payment Information</label>
                    <CardElement />
                </div>

                <button type="submit" className="btn btn-primary">Check Out</button>

            </form>
        </div>
    );
};

export default StripePayment;