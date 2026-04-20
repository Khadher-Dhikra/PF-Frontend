import StatCard from "../../components/dashboard/StatCard";
import ProjectProgress from "../../components/student/ProjectProgress";
import ProjectInformation from "../../components/student/ProjectInforamtion";
import { studentService } from "../../services/student.service";
import { useState, useEffect } from "react";

export default function StudentDashboard() { 
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const data = await studentService.getStudentProjectData();
                setProjectData(data);
            } catch (err) {
                console.error(err);
            }
        };
            fetchStats();
    }, []);

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
                    <ProjectProgress projectData={projectData}/>
                </div>
                <div
                    className="rightDshbBox"
                    style={{flex:4}}
                >
                    <ProjectInformation projectData={projectData}/>
                </div>
                
            </div>
        </>
    );
}