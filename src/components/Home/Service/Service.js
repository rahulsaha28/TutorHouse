import React, { useContext } from 'react';
import { Loader } from 'rsuite';
import { TutorContext } from '../../../App';
import CardLoading from '../../utility/LoadingSystem/CardLoading';
import Course from '../Course/Course';

import './Service.css';

const Service = () => {
    const { courses } = useContext(TutorContext);
    return (
        <section className="section-service">
            <div className="container">
                <div className="row mt-5">
                    <h3 className="text-center mb-5">Our Top Services</h3>
                    {
                        courses.length > 0 ?
                            (
                                <div className="d-flex flex-md-row edit-flex-sm-column  justify-content-between">
                                    {

                                        courses.map(course => <Course key={Math.random()} course={course} />)

                                    }
                                </div>
                            )
                            :
                            (
                                <div style={{ height: "200px" }} className="d-flex justify-content-center">
                                    <Loader size="lg" />
                                </div>
                            )

                    }

                </div>
            </div>
        </section>
    );
};

export default Service;