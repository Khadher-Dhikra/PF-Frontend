import StatCard from "../../components/dashboard/StatCard";
import coordRecentlyCreatedAccounts from "../../components/coordinator/coordRecentlyCreatedAccounts";
import coordQuickAction from "../../components/coordinator/coordQuickAction";

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
                    <coordRecentlyCreatedAccounts />
                </div>
                <div
                    className="rightDshbBox"
                    style={{flex:3}}
                >
                    <coordQuickAction />
                </div>
            </div>
        </>
    );
}