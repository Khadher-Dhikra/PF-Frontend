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

            <div className="StudProjectInformation">
                <ProjectProgress />
                <ProjectInformation />
            </div>
        </>
    );
}