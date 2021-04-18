import { useSpring } from '@react-spring/core';
import { animated } from '@react-spring/web';
import React from 'react';
import { Icon } from 'rsuite';
import './Amount.css';

const Amount = () => {
    const animationProps = useSpring({ totalUser:10, from:{ totalUser:0 } })
    return (
        <section className="amount-section">
            <div className="row">
            <div className="d-flex align-items-center col-md-6 col-sm-12">
                <div className="p-5">
                   <Icon size="4x" icon="user-secret"/> 
                </div>
                
                <div className="counter"> 
                    <animated.h5>{ animationProps.totalUser }</animated.h5>
                    <small className="text-4">Total Number Of Tutor</small>
                </div>
            </div>
            <div className="d-flex align-items-center col-md-6 col-sm-12">
                <div className="p-5">
                   <Icon size="4x" icon="user"/> 
                </div>
                
                <div>
                    <h5></h5>
                    <small className="text-4">Total Number Of Tutor</small>
                </div>
            </div>
        
            </div>

        </section>
    );
};

export default Amount;