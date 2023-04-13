import { Link, redirect, useNavigate } from "react-router-dom";
import { SharedStateContext } from "../context";
import { useContext, useEffect, useState } from "react";
import APIClient from "../lib/api-client";

const apiClient = new APIClient();

export default function SignUp(){

    const [data, setData] = useContext(SharedStateContext);
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        password:""
    });
    const navigate = useNavigate();

    useEffect(()=>{
        setData({...data, title:"Sign Up"});
    }, []);

    function hundleChange(evt){
        setFormData({
            ...formData,
            [evt.target.id]: evt.target.value
        })
    }

    function hundleSignUp(evt){
        evt.preventDefault();
        console.log(formData);
        
        // Validate
        if(!evt.target.checkValidity){
            evt.target.classList.add('validated')
            return;
        }

        evt.target.querySelector('#signUpBtn').disabled = true;
        apiClient.create('/user/signup', formData).then(()=>{
            navigate("/signin");
        })
        .catch(e=>{
            console.log(e);
            evt.target.querySelector('#signUpBtn').disabled = false;
        })
    }

    return <form className="p-5 d-flex flex-column justify-content-center h-100" onSubmit={hundleSignUp}>
        
        <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" onChange={hundleChange} value={formData.name} className="form-control" required />
            <i className="invalid-feedback">Enter full name</i>
        </div>
        
        <div className="form-group mt-4">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" onChange={hundleChange} value={formData.email} className="form-control" required />
        </div>
        
        <div className="form-group mt-4">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" onChange={hundleChange} value={formData.phone} className="form-control" required />
        </div>
        
        <div className="form-group mt-4">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={hundleChange} value={formData.password} className="form-control" required />
        </div>

        <div className="mt-4">
            <button className="btn bg-primary text-white w-100" id="signUpBtn">Sign Up</button>
        </div>

        <div className="mt-4">
            <Link to="/signin" className="btn w-100">Sign In</Link>
        </div>

    </form>
}