import StatCard from "../../components/dashboard/StatCard";
import ProjectProgress from "../../components/student/ProjectProgress";
import ProjectInformation from "../../components/student/ProjectInforamtion";

export default function StudentDashboard() {
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
                    style={{flex:6}}
                >   
                    <ProjectProgress />
                </div>
                <div
                    className="rightDshbBox"
                    style={{flex:4}}
                >
                    <ProjectInformation />
                </div>
                
            </div>
        </>
    );
}