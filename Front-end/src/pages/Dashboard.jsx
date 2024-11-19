import React from 'react';
import '../App.css';
import Layout from '../Layout';
import Content from '../components/dashboard-compo/Content';
import Logo from '../components/commons/Logo';
import UserInfo from '../components/commons/UserInfo';
import Sidebar from '../components/commons/Sidebar';

function Dashboard() {
    return (
        <div className="grid-container">
            <div style={{padding: "16px"}} >
                <Logo />
                <UserInfo />
            </div>
            <div style={{display:"flex", alignItems: "center"}} >
                <Sidebar />
                <Content />
            </div>
        </div>
    );
}

export default Dashboard;
