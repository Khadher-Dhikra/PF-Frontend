import { Outlet } from "react-router-dom";
import SideBar from "../components/dashboard/SideBar";
import HeaderBar from "../components/dashboard/HeaderBar";
import "../styles/DashboardStyle.css";

export default function DashboardLayout() {
    return(
        <div className="dashboard-container">
            <SideBar />

            <main className="dashboard-content">
                <HeaderBar />
                <div className="main-content">
                    <Outlet />
                </div>
            </main>

        </div>
    );
}