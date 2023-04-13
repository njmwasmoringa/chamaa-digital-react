import { useContext, useEffect, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import { SharedStateContext } from "../context";
import APIClient from "../lib/api-client";

const apiClient = new APIClient();

export default function SignIn(){

    const [data, setData] = useContext(SharedStateContext);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    useEffect(()=>{
        setData({...data, title:"Sign In"});
    }, []);

    function handleFieldChange(evt){
        setFormData({
            ...formData,
            [evt.target.id]: evt.target.value
        })
    }

    function handleSignin(evt){
        evt.preventDefault();

        if(!evt.target.checkValidity){
            return;
        }

        apiClient.create('/user/signin', formData).then(authData=>{
            sessionStorage.setItem("token", authData.token);
            setData({
                ...data,
                user: JSON.parse(atob(authData.token))
            });
            navigate('/dashboard')
        })
        .catch(e=>{
            console.log(e);
        });
    }

    return <form className="p-5 d-flex flex-column justify-content-center h-100" onSubmit={handleSignin}>
        
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" onChange={handleFieldChange} className="form-control" />
        </div>
        
        <div className="form-group mt-4">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={handleFieldChange} className="form-control" />
        </div>
        <div align="right" className="mt-2">
            <a href="">Fogot Password?</a>
        </div>

        <div className="mt-4">
            <button className="btn bg-primary text-white w-100">Sign In</button>
        </div>

        <div className="mt-4">
            <Link to="/signup" className="btn w-100">Create Account</Link>
        </div>

    </form>
}