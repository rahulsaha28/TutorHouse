import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { Message } from 'rsuite';
import { TutorContext } from '../../../App';
import { imgbbKey, serverURL } from '../../Config/Config';
import { EditMessage } from '../../utility/Message';

const AddService = () => {
    const [image, setImage] = useState({})
    const history = useHistory();

    // get courses
    const { setCourses, user } = useContext(TutorContext);

    // form control using hook
    const { register, handleSubmit, formState:{ errors } } = useForm();

    const handelImageUpload = e=>{
        
        const imageData = new FormData();
        imageData.set("key", imgbbKey);
        imageData.append('image', e.target.files[0])

        fetch('https://api.imgbb.com/1/upload', {
            method:"POST",
            body:imageData
        })
        .then(res=>res.json())
        .then(({data})=>setImage({imgURL:data.url}));
    }

    // form submit function
    const handelFormSubmit = data=>{
        fetch(`${serverURL}product/add`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "type":user.type
            },
            body:JSON.stringify({...data, imageURL:image.imgURL})
        })
        .then(res=>res.json())
        .then(message=>{
            
            fetch(`${serverURL}product`)
            .then(newRes=>newRes.json())
            .then(newResult=>setCourses(newResult.product))

            message?.success?EditMessage("success", message.success):EditMessage("error", message.error);
            history.replace('/');
        })
    }

    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit(handelFormSubmit)} className="w-50">
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Subject Title</label>
                    <input {...register('title', {required:true})} type="text" className="form-control" />
                    { errors.title && <Message type="error" description="Title Must be set"/> }
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Description</label>
                    <textarea {...register('description', {required:true})} type="text" className="form-control" />
                    { errors.description && <Message type="error" description="Description Must be set"/> }
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Price</label>
                    <input {...register('price', {required:0, min:10})} type="number" className="form-control" />
                    { errors.price && <Message type="error" description="Price must be getter than 10"/> }
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Image</label>
                    <input required type="file" onChange={handelImageUpload} className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    );
};

export default AddService;