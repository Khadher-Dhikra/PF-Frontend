import { tutorService } from "../../services/tutor.service";
import { useEffect, useState } from "react";

export default function TutorMyStudentsTable() {
    const [tutStudent, setTutStudent] = useState([]);

    useEffect(() => {
            const fetchStats = async () => {
                try {
                    const data = await tutorService.getTutorStudents();
                    setTutStudent(data.students);
                    console.log(data);
                    console.log(data.students);
                } catch (err) {
                    console.error(err);
                }
            };
            fetchStats();
        }, []);
    
    return(
        <>
            <div className="PInformationTitle">
                <h2>My Students</h2>
                <button className="BTN">
                    Show More
                </button>
            </div>

            <table className="DshTable">
                <thead>
                    <tr>
                        <th>Student</th>
                        <th>Porject</th>
                        <th>Progress</th>
                        <th>Stats</th>
                    </tr>
                </thead>

                <tbody>
                    {tutStudent.length === 0 ? (
                        <tr>
                            <td colSpan="4" style={{textAlign: "center"}}>
                                No students found
                            </td>
                        </tr>
                    ) : (
                        tutStudent.map((s,index) => (
                            <tr key={index}>
                            <td>{s.student_name}</td>
                            <td>{s.project_title}</td>
                            <td>
                                {/*com later */}
                                <div className="progressbarTable">
                                    <div className="progressBar">
                                        <div style={{width: `${s.progress}%`}}></div>
                                    </div>
                                    <span className="progressbarTableSpan">{s.progress}%</span>
                                </div>
                            </td>
                            <td className="cent">
                                <span className="tableProg">{s.status}</span>
                            </td>
                        </tr>
                        ))
                    )}
                </tbody>
            </table>
        </>
    );
}