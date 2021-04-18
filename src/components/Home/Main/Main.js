import React from 'react';
import './Main.css';
import schoolLogo from '../../../image/school.png';

const Main = () => {
    return (
        <div className="navbar-main-section">
           <div className="row d-flex justify-content-evenly align-items-center main-section">
               <div className="col-md-4 col-sm-12 main-left-section">
                   <h3 className="brand-title mb-3">Large Education Programs</h3>
                   <p className="text-2 mb-2">Finding your tutor easily, Smartly and all More. A large community group is here...</p>
                   <button className="btn btn-primary">TRY FOR FREE</button>
               </div>
               <div className="col-md-6 col-sm-12">
                    <img className="medium-img" src={schoolLogo} alt=""/>
               </div>
           </div> 
        </div>
    );
};

export default Main;