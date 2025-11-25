import React from "react";
import { Link,Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav className="dashboard">
        <Link to="profile">Profile</Link>
        <Link to="setting">Setting</Link>
        <Link to="analytics">Analytics</Link>
      </nav>

      <Outlet/>
    </div>
  );
};

export default Dashboard;
