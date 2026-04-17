import { Outlet } from "react-router-dom";
import SideBar from "../components/dashboard/SideBar";
import HeaderBar from "../components/dashboard/HeaderBar";
import "../styles/DashboardStyle.css";
import { useState } from "react";

export default function DashboardLayout() {
    const [sideBarPos,setSideBarPos] = useState(true);
    return(
        <div className="dashboard-container">
            <SideBar sideBarPos={sideBarPos}/>

            <main className="dashboard-content">
                <HeaderBar toggleSideBar={() => setSideBarPos(prev => !prev)}/>
                <div className="main-content">
                    <Outlet />
                </div>
            </main>

        </div>
    );
}