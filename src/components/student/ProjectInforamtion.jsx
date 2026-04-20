
export default function ProjectInformation({projectData}) {
    const project = projectData?.project;

    if (!project){
        return <p>Loading...</p>
    }

    return(
        <>
            <div className="PInformationTitle">
                <h2>Project Information</h2>
                <span>{project.project_status}</span>
            </div>
            
            <div className="Pinformation">
                <span>Title</span>
                <p>{project.project_title}</p>

                <span>Supervisor</span>
                <p>{project.tutor_name}</p>

                <span>team</span>
                <p>{project.student_group}</p>

                <span>Defense Date</span>
                <p>...</p>
            </div>
        </>
    );
    
}