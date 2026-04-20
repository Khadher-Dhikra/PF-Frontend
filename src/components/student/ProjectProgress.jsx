import { FaRegCheckCircle, FaRegClock } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";

export default function ProjectProgress({projectData}) {
    const project = projectData?.project;
    const subtasks = projectData?.subtasks || [];

    return(
        <>
            <h2>Project Progress</h2>
            
            <div className="PProgress">
                <div className="ProgressPersent">
                    <span>Overall progress</span>
                    <span>{project?.progress_percent ?? 0}%</span>
                </div>

                <div className="progressBar">
                    <div style={{ width: `${project?.progress_percent ?? 0}%` }}></div>
                </div>

            </div>

            <div className="ProjectTasks">
                {subtasks.length === 0 ? (
                    <p>NO tasks yet</p>
                ) : (
                    subtasks.map((item, i) => (
                        <div key={i} className="tasksList">
                            <div>
                                <div className="tacksIconBox">{
                                    item.status === "Completed"? <FaRegCheckCircle style={{color:"green"}}/>
                                    : item.status === "In_progress" ? <FaRegClock style={{color:"orange"}}/>
                                    : <AiOutlineExclamationCircle style={{color:"gray"}}/>
                                }</div>
                                
                                <div>
                                    <p>{item.title} <br />
                                        <span>{item.due_date}</span>
                                    </p>
                                </div>
                            </div>

                            <div>
                                <span 
                                    className="tasksStatus"
                                    style={{
                                        backgroundColor: 
                                            item.status === "Completed" ? "#2166c1"
                                            : item.status === "In_progress" ? "orange"
                                            : "lightgray",
                                        color:
                                            item.status === "Completed" ? "white"
                                            : "black",
                                        border:
                                            item.status === "Comming_soon" ? "1px solid gray"
                                            : "none"
                                    }}
                                >{item.status}</span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}