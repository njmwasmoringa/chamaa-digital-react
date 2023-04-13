import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { SharedStateContext } from "../../context";

export default function Withdraw(){

    const [data, setData] = useContext(SharedStateContext);

    useEffect(()=>{
        setData({...data, title:"Withdraw"});
    }, []);

    return <form className="p-5 d-flex flex-column justify-content-center h-100">
        
        <div className="form-group">
            <label htmlFor="amount">Amount to withdraw</label>
            <input type="text" id="amount" name="amount" placeholder="1000" className="form-control" />
        </div>
        
        <div className="form-group mt-4">
            <label htmlFor="password">Phone Number</label>
            <input type="password" id="password" name="password" className="form-control" />
        </div>

        <div className="mt-4">
            <button className="btn bg-primary text-white w-100">Withdraw</button>
        </div>

    </form>
}