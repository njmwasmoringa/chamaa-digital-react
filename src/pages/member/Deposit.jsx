import { useContext, useEffect, useState } from "react";
import { SharedStateContext } from "../../context";
import APIClient from "../../lib/api-client";

const apiClient = new APIClient();

export default function Deposit(){

    const [data, setData] = useContext(SharedStateContext);
    const [formData, setFormData] = useState({
        amount:1000,
        phone: ''
    })

    useEffect(()=>{
        setData({...data, title:"Deposit"});
    }, []);

    function handleFieldChange(evt){
        setFormData({
            ...formData,
            [evt.target.id]: evt.target.value
        });
    }

    function handleSubmission(evt){
        evt.preventDefault();
        const form = evt.target;
        const button = evt.target.querySelector('button');

        if(!form.checkValidity()){
            return;
        }

        button.disabled = true;
        apiClient.create(`/deposit`, formData).then(resp=>{
            console.log(resp);
        }).catch(e=>{
            console.log(e);
            button.disabled = false;
        })
    }

    return <form className="p-5 d-flex flex-column justify-content-center h-100" onSubmit={handleSubmission}>
        
        <div className="form-group">
            <label htmlFor="amount">Amount to deposit</label>
            <input type="text" id="amount" onChange={handleFieldChange} placeholder="1000" className="form-control" />
        </div>
        
        <div className="form-group mt-4">
            <label htmlFor="phone">Phone Number</label>
            <input type="number" id="phone" onChange={handleFieldChange} placeholder="254 712 xxx xxx" className="form-control" />
        </div>

        <div className="mt-4">
            <button className="btn bg-primary text-white w-100">Deposit from M-Pesa</button>
        </div>

    </form>
}