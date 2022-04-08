import React from 'react';
import { Outlet } from 'react-router-dom'
import '../dashboard.css'

const DashboardMain = () => {
    return (
        <div className='col-12 dash-main'>
            <Outlet/>
        </div>
    );
};

export default DashboardMain;