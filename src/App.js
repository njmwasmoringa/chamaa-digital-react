import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import MemberDashboard from './pages/member/MemberDashboard';
import Deposit from './pages/member/Deposit';
import Withdraw from './pages/member/Withdraw';
import LoanApplication from './pages/member/LoanApplication';
import Layout from './components/Layout';
import SharedState, { SharedStateContext } from './context';
import { useContext, useEffect, useState } from 'react';
import APIClient from './lib/api-client';

const apiClient = new APIClient();

function App() {

  // const [user, setUser] = useState(sessionStorage.getItem("token") ? JSON.parse(atob(sessionStorage.getItem("token"))) : null);
  // console.log(user);
  const [data] = useContext(SharedStateContext);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          
          <Route 
            path='/' 
            index 
            element={ data.user ? <Navigate to="/dashboard" /> : <Home />}
          />

          <Route path='signin' element={ data.user ? <Navigate to="/dashboard" /> : <SignIn />} />
          <Route path='signup' element={ data.user ? <Navigate to="/dashboard" /> : <SignUp />} />
          <Route path='profile' element={ data.user ? <Profile /> : <Navigate to="/signin" />} />
          <Route 
            path='dashboard' 
            element={ data.user ? <MemberDashboard /> : <Navigate to="/signin" />}
          />
          <Route path='deposit' element={ data.user ? <Deposit /> : <Navigate to="/signin" />} />
          <Route path='withdraw' element={ data.user ? <Withdraw /> : <Navigate to="/signin" />} />
          <Route path='loans' element={ data.user ? <LoanApplication /> : <Navigate to="/signin" />} />
          <Route path='loadapplication' element={ data.user ? <LoanApplication /> : <Navigate to="/signin" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
