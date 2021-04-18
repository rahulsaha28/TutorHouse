import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Panel } from 'rsuite';
import { TutorContext } from '../../../App';
import CardLoading from '../../utility/LoadingSystem/CardLoading';

const Book = () => {
    const { cart } = useContext(TutorContext);

    return (
        <div>
            {
                cart?.length > 0 ?
                    (
                        <div className="w-50 border p-2">
                            {
                                cart && <Panel>
                                    <img style={{ width: "100%", height: "15rem" }} src={cart[0]?.imageURL} alt="" />
                                    <Panel header={cart[0]?.title}>
                                        <p className="mb-3 p-2">{cart[0]?.description}</p>
                                        <h3>{cart[0]?.price} TK</h3>
                                    </Panel>
                                    <Link to={`/course/${cart[0]?.id}`} className="btn btn-primary mb-3 mt-2">
                                        Continue
                                     </Link>
                                </Panel>
                            }
                        </div>
                    )
                    : 
                    (
                        <CardLoading/>
                    )
            }
        </div>


    );
};

export default Book;