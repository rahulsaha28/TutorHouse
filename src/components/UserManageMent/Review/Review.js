import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { Message } from 'rsuite';
import { TutorContext } from '../../../App';
import { serverURL } from '../../Config/Config';
import { EditMessage } from '../../utility/Message';

const Review = () => {
    const { handleSubmit, register, formState:{errors} } = useForm();
    const { user } = useContext(TutorContext);

    const history = useHistory();

    // handel submit
    const handelReview = data=>{

        const newReview = {
            ...data,
            user
        }
        
        fetch(`${serverURL}review/add`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newReview)
        })
        .then(res=>res.json())
        .then(result=>{
            result?.success?EditMessage('success', result.success):EditMessage('error', result.error)
            history.replace("/");
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handelReview)}>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Course Title</label>
                    <input {...register("title", { required:true })} type="text" className="form-control"/>
                    { errors.title && <Message type="error" description="Course title must be fill" />}
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Review Description</label>
                    <textarea {...register("description", { required:true })} type="text" className="form-control" rows="10"/>
                    { errors.description && <Message type="error" description="Description must be fill" />}
                </div>
                <button  className="btn btn-success">Review Us</button>
            </form>
        </div>
    );
};

export default Review;