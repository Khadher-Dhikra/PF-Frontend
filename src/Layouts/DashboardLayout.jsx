import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import HeaderBar from "../components/HeaderBar";
import "../styles/DashboardStyle.css";

export default function DashboardLayout() {
    return(
        <div className="dashboard-container">
            <SideBar />

            <main className="dashboard-content">
                <HeaderBar />
                <div className="dashboard-main">
                    <Outlet />
                </div>
            </main>

        </div>
    );
}