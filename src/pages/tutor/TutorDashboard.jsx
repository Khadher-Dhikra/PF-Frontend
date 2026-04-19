import StatCard from "../../components/dashboard/StatCard";
import TutorMyStudentsTable from "../../components/tutor/tutorMyStudentsTable";

export default function TutorDashboard() {
    return(
        <>
            <div className="DshHeader">
                <h1>Tutor Dashboard</h1>
                <span>track your students and projects</span>
            </div>
                
            <StatCard />

            <div className="DashboardInformation">
                <div
                    className="leftDshbBox"
                    style={{flex:1}}
                >
                    <TutorMyStudentsTable />
                </div>
            </div>
        </>
    );
}