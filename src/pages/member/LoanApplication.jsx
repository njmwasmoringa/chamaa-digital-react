import { useContext, useEffect } from "react";
import { SharedStateContext } from "../../context";

export default function LoanApplication(){

    const [data, setData] = useContext(SharedStateContext);

    useEffect(()=>{
        setData({...data, title:"Loan Application"});
    }, []);

    return <>
        Loan Application
    </>
}