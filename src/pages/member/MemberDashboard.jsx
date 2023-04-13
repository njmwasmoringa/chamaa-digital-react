import { useContext, useEffect, useState } from "react"
import { SharedStateContext } from "../../context";
import { Link } from "react-router-dom";
import APIClient from "../../lib/api-client";

const apiClient = new APIClient();

export default function MemberDashboard() {

    const [data, setData] = useContext(SharedStateContext);
    const [accounts, setAccounts] = useState();
    const [selectedAccount, setSelectedAccount] = useState();
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        setData({ ...data, title: "Dashboard" });
    }, []);

    useEffect(() => {
        apiClient.get("/account").then(acnt => {
            setAccounts(acnt);
            if (acnt.length) {
                setSelectedAccount(acnt[0]);
                setTransactions(acnt[0].transactions);
            }
        });
    }, []);



    return <>
        <div className="d-flex flex-column mt-5 h-100">

            {selectedAccount ? <><div className="p-5">
                <div className="p-3 bg-white rounded">
                    <span>Total Savings</span>
                    <h1>{selectedAccount.total_savings.toFixed(2)}</h1>
                </div>
            </div>

                <div className="flex-fill bg-white">
                    <h4 className="p-3 m-0 text-center">Latest Transactions</h4>
                    {/* <hr className="m-0 p-0" /> */}

                    <div className="d-flex flex-column">
                        {transactions ? transactions.map((t, i) => <div key={i + 1} className="d-flex justify-content-between ps-3 pe-3 pt-2 pb-2 shadow-sm mb-3">
                            <div>
                                <div>{t.trx_ref}</div>
                                <small>{}</small>
                            </div>
                            <div align="right">{t.amount.toFixed(2)}</div>
                        </div>) : <h3 className="align-self-center text-warning">No transactions so far</h3>}
                    </div>
                </div>

            </> : <>
                <div className="m-3 align-self-center text-center p-2 bg-danger text-light rounded">
                    <h3>You do not have an account created yet</h3>
                    <p>Try depositing some money first</p>
                </div>
            </>}
            <div className="fixed-bottom btn-group">
                <Link to="/deposit" className="btn btn-light flex-fill">Deposit</Link>
                <Link to="/withdraw" className="btn btn-light flex-fill border-left border-right">Withdraw</Link>
                <Link to="/loans" className="btn btn-light flex-fill">Loans</Link>
            </div>
        </div>
    </>
}