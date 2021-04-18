import React from 'react';
import Amount from './Amount/Amount';
import Main from './Main/Main';
import Professional from './Professional/Professional';
import RateSection from './RateSection/RateSection';
import Service from './Service/Service';
import Subscription from './Subscription/Subscription';



const Home = () => {
    return (
        <>
        <div className="col-md-12">
            <Main />        
        </div>
        <div className="col-md-12">
            <Service/>
        </div>
        <div className="col-md-12 col-sm-12">
            <Professional/>
        </div>
        <div className="col-md-12">
            <Amount/>
        </div>
        <div className="col-md-12">
            <RateSection/>
        </div>
        <div className="col-md-12">
           <Subscription/>
        </div>
        </>

    );
};

export default Home;