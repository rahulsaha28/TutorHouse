import React from 'react';
import './Subscription.css'

const Subscription = () => {
    return (
        <section className="sub-section">
            <div className="row">
                <div className="mt-5 col-md-12 d-flex-column text-center">
                    <h4 className="mb-3">Keep In Touch With Us</h4>
                    <form className="d-flex flex-column align-items-center">
                        <input className="w-50 mw-100 form-style mb-3" placeholder="Name" type="text"/>
                        <input className="w-50 mw-100 form-style mb-3"  type="email" placeholder="Email"/>
                        <button className="btn btn-success mb-4">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Subscription;