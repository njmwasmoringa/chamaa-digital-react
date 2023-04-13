import { Link } from "react-router-dom";

export default function Home(){

    return <div className="flex-fill d-flex flex-column justify-content-center align-items-center p-5">

        <h1 className="border border-danger d-flex flex-column align-items-center justify-content-center rounded-circle p-5 logo-lg">
            CB
        </h1>

        <Link to="/signin" className="btn btn-danger w-100 mb-3 text-white mt-5">Sign In</Link>
        <Link to="/signup" className="btn btn-danger w-100 text-white">Sign Up</Link>
    </div>

}