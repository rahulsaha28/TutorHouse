import React from 'react';
import './Professional.css';
import professionalImg from '../../../image/profession.png';
import { Icon } from 'rsuite';

const Professional = () => {
    return (
        <section className="professional-section d-flex align-items-center justify-content-evenly">
            <img style={{ width:"35%" }} src={professionalImg} alt=""/>
            <div className="professional-right">
                <h3>How Does Our Team Work?</h3>
                <ul>
                    <li>
                        <h6><Icon size="2x" icon="check-square-o" /> They are very sincere.</h6>
                    </li>
                    <li>
                        <h6><Icon size="2x" icon="check-square-o" /> They are very friendly.</h6>
                    </li>
                    <li>
                        <h6><Icon size="2x" icon="check-square-o" /> They do there work properly.</h6>
                    </li>
                    <li>
                        <h6><Icon size="2x" icon="check-square-o" /> They are very sincere.</h6>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Professional;