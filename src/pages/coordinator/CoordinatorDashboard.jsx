import StatCard from "../../components/dashboard/StatCard";
import CoordRecentlyCreatedAccounts from "../../components/coordinator/CoordRecentlyCreatedAccounts";
import CoordQuickAction from "../../components/coordinator/CoordQuickAction";

export default function CoordinatorDashboard() {
    return(
        <>
            <div className="DshHeader">
                <h1>My Space</h1>
                <span>tracking your academic project</span>
            </div>
            <StatCard />
            <div className="DashboardInformation">
                <div
                    className="leftDshbBox"
                    style={{flex:7}}
                >
                    <CoordRecentlyCreatedAccounts />
                </div>
                <div
                    className="rightDshbBox"
                    style={{flex:3}}
                >
                    <CoordQuickAction />
                </div>
            </div>
        </>
    );
}