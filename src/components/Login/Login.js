import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Icon } from 'rsuite';
import { TutorContext } from '../../App';
import { serverURL } from '../Config/Config';
import './Login.css'
import { firebaseInitialization, GoogleLogin } from './LoginManagement';


firebaseInitialization();

const Login = () => {

    // use user from context
    const {user, setUser} = useContext(TutorContext);

    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from:{ pathname:"/" } }

    const handelLogin = ()=>{
        GoogleLogin()
        .then(result=>{
            
            const newUser = {
                name: result.user.displayName,
                email:result.user.email,
                imageURL:result.user.photoURL
            }
            fetch(`${serverURL}user`, {
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({ email:newUser.email })
            })
            .then(res=>res.json())
            .then(Data=>{
                
                setUser(Data.user);
                if(!Data.user?.email){
                
                  fetch(`${serverURL}user/add`, {
                      method:"POST",
                      headers:{
                        'Content-Type':'application/json'
                      },
                      body: JSON.stringify(newUser)
                  })
                  .then(res=>res.json())
                  .then(data=>{
                    setUser(data)
                  });  
                }
                
                history.replace(from);
            });
            
            
        }); 
        
    }

    return (
        <section className="login-section">
            <div className="">
              <div className="row">
                <div className="login-section-cart col-md-12 d-flex justify-content-center align-items-center">
                    <div className=" cart-login d-flex justify-content-center align-items-center">
                        <button onClick={handelLogin} className="btn btn-primary"><Icon icon="google" /> Continue using Google</button>
                    </div>
                </div>
            </div>  
            </div>
            
        </section>
    );
};

export default Login;