import React, { useEffect, useState } from 'react';
import { Loader } from 'rsuite';
import { serverURL } from '../../Config/Config';
import EachReview from '../EachReview/EachReview';


import './RateSection.css';

const RateSection = () => {

    const [ reviews, setReviews ] = useState([]);

    useEffect(()=>{
        fetch(`${serverURL}review`)
        .then(res=>res.json())
        .then(result=>setReviews(result.review));
    }, [setReviews])

    return (
        <section className="mt-4 rate-section">
            <div className="container">
                <div className="row">
                    {
                        reviews?.length>0?
                        (reviews && reviews.map(review=><EachReview key={Math.random()} review={review}/>))
                        :
                        (
                            <div className="col-md-12 mb-5 text-center" style={{width:"200px"}}>
                                <Loader size="lg" content="Loading..."/>
                            </div>

                        )
                    }

                </div>
            </div>
        </section>
    );
};

export default RateSection;