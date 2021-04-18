import React from 'react';
import { Icon, Panel } from 'rsuite';

const EachReview = (props) => {
    const { user, description, title } = props.review;
    return (
        <div className="col-md-4 col-sm-12 mb-2">
            <Panel className="rating-cart p-2">
                <div className="d-flex justify-content-center">
                    <img className="img-rate" src={user.imageURL} alt="" />
                </div>

                <Panel header={title}>
                    <p>{description}</p>
                    <h6 style={{ color:"#FF9043" }}> <Icon icon="star" /> <Icon icon="star" /> <Icon icon="star" /> <Icon icon="star" /> </h6>  
                </Panel>
            </Panel>
        </div>
    );
};

export default EachReview;