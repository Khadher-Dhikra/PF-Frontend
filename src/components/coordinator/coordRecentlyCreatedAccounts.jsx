import { coordinatorService } from "../../services/coordinator.service";
import { useState, useEffect } from "react";

export default function CoordRecentlyCreatedAccounts() {
    const [users, setUsers] = useState([]);
    
        useEffect(() => {
            const fetchStats = async () => {
                try {
                    const data = await coordinatorService.gerRecentlyCreatedAccounts();
                    setUsers(data?.accounts ?? []);
                } catch (err) {
                    console.error(err);
                }
            };
            fetchStats();
        }, []);
    return(
        <>
            <div className="PInformationTitle">
                <h2>Recently Created Accounts</h2>
            </div>

            <table className="DshTable">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    {users.length === 0 ? (
                        <tr>
                            <td colSpan="4" style={{textAlign: "center"}}>
                                No users found
                            </td>
                        </tr>
                    ) : (
                        users.map((s,index) => (
                            <tr key={index}>
                            <td>{s.username}</td>
                            <td className="cent">
                                <span className="tableProg">{s.user_role}</span>
                            </td>
                            <td>{s.user_email}</td>
                            <td>{s.date_created}</td>
                        </tr>
                        ))
                    )}
                </tbody>
            </table>
        </>
    );
}