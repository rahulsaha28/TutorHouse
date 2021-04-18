import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Panel } from 'rsuite';

const Course = (props) => {
    const { _id:id, title, description, imageURL, price } = props.course
    return (
        <div className="col-md-3 col-sm-12 text-center mb-5">
            <Panel className="tutor-cart">
                <img className="tutor-img" style={{ width: "100%", height: "15rem" }} src={imageURL} alt="" />
                <Panel header={title}>
                    <p className="mb-3 p-2">{description}</p>
                    <h3>{ price } TK</h3>
                </Panel>
                <Link to={`/course/${id}`} className="btn btn-primary mb-3 mt-2">
                    <Icon  icon="plus" /> Add
                </Link>
            </Panel>
        </div>
    );
};

export default Course;