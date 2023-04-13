import { useContext, useEffect } from "react"
import { SharedStateContext } from "../context"
import { Link } from "react-router-dom";

export default function Header() {

    const [data, setData] = useContext(SharedStateContext);

    return <header className="d-flex align-items-center p-3 fixed-top">
        <Link to="/" className="me-3 logo d-flex align-items-center justify-content-center p-3">CD</Link>
        <div>
            <h3 className="m-0 p-0">Chamaa Digital</h3>
            {data.title ? <span>{data.title}</span> : <></>}
        </div>
    </header>

}