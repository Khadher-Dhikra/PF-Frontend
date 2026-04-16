
export default function TutorMyStudentsTable() {
    return(
        <>
            <div className="PInformationTitle">
                <h2>My Students</h2>
                <button className="BTN">
                    Show More
                </button>
            </div>

            <table className="DshTable">
                <tr>
                    <th>Student</th>
                    <th>Porject</th>
                    <th>Progress</th>
                    <th>Stats</th>
                </tr>
                
                <tr>
                    <td>Fatma bousiha</td>
                    <td>System de gestion</td>
                    <td>
                        {/*com later */}
                        <div className="progressbarTable">
                            <div className="progressBar">
                                <div></div>
                            </div>
                            <span className="progressbarTableSpan">45%</span>
                        </div>
                    </td>
                    <td className="cent">
                        <span className="tableProg">In Progress</span>
                    </td>
                </tr>
            </table>
        </>
    );
}