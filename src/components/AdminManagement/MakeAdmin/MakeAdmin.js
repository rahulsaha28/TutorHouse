import React from 'react';
import { useForm } from 'react-hook-form';
import { Icon, Message } from 'rsuite';
import { serverURL } from '../../Config/Config';
import { EditMessage } from '../../utility/Message';

const MakeAdmin = () => {
    const { handleSubmit, register, formState:{errors} } =  useForm();

    const handelAddAdmin = data=>{
        fetch(`${serverURL}user/add`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:data.email,
                type:'admin'
            })
        })
        .then(res=>res.json())
        .then(result=>{
            result?.success?EditMessage("success", result?.success):EditMessage("error",result?.error);
        })
    }

    // pattern:/\S+@gmail.com/g
    return (
        <div>
            <form onSubmit={handleSubmit(handelAddAdmin)} className="d-flex">
            <input {...register('email', {required:true })} className="form-control w-50" type="email" placeholder="Enter you want the admin email"/>
            <button className="btn btn-primary"> <Icon icon="plus" /> </button>
            <br/>
            </form>
            { errors.email && <Message type="error" description="Must be gmail"/> }
            
        </div>
    );
};

export default MakeAdmin;