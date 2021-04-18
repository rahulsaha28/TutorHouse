import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className="footer-section">
            <div className="row">
                <div className="col-md-6 text-center p-5">
                    <h4 className="mb-4">Tutor House</h4>
                    <p className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, similique atque! Eveniet fuga quas suscipit cum repellat sapiente facilis molestiae!</p>
                    <h6>@ {new Date().getFullYear()} Designed by Rahul Saha</h6>
                </div>
                <div className="col-md-6 footer-right p-5">
                    <h4>Who we are</h4>
                    <ul>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Webinars</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Footer;