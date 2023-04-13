import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { SharedStateContext } from "../context";

export default function Profile(){

    const [data, setData] = useContext(SharedStateContext);

    useEffect(()=>{
        setData({...data, title:"Profile"});
    }, []);

    return <div className="p-3">
        
        <div className="logo-lg bg-light d-flex flex-column align-items-center justify-content-center rounded-circle p-4 text-center text-secondary">
            <h2>Profile Pic</h2>
        </div>

        <div className="p-3">
            <span>Name</span>
            <h4>Julius Mwangi</h4>
        </div>

        <div className="p-3">
            <span>Member No.</span>
            <h4>CD-02930-2023</h4>
        </div>

        <div className="p-3">
            <span>Email Address</span>
            <div><strong>julius.mwangi@moringaschool.com</strong></div>
        </div>

        <div className="p-3">
            <Link to="/profile" className="btn">Change Password</Link>
        </div>

        <div className="p-3">
            <Link to="/profile" className="btn">Edit Profile</Link>
        </div>
        
    </div>
}