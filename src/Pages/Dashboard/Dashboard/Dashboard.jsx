import React from "react";
import DashboardMain from "../DashboardMain/DashboardMain";
import '../dashboard.css'
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid dashboard-container">
        <div className="dashboard">
         <div className="row">
           <div className="col-2 p-0">
             <Sidebar/>
           </div>
           <div className="col-10">
              <div className="row mx-auto">
               <DashboardMain/>
             </div>
           </div>
         </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
