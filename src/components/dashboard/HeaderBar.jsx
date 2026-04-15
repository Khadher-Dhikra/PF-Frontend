import academicCap from "../../assets/academic-cap-purple.png";
import { MdLogout, MdNotificationsNone } from "react-icons/md";
import { FiSidebar } from "react-icons/fi";
import { useAuth } from "../../Auth/useAuth";
import { useNavigate } from "react-router-dom";

export default function HeaderBar() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate("/login", {replace: true})
    }

    return(
        <header className="header-bar">

            <div className="header-logo">
                <FiSidebar className="HBicons SideBarIcon"/>
                
                <div className="H-logo">
                    <img src={academicCap} alt="academicCap" />
                    <span>
                        FST-SBZ-Academia
                    </span>
                </div>
            </div>


            <div className="Auth">
                <div
                    className="logout"
                    onClick={handleLogout}
                >
                    <MdLogout className="HBicons"/>
                </div>

                <div className="userName-role">

                    <div className="profile-Pic">
                        <span>JB</span>
                    </div> 

                    <div>
                        <span>{user.username}</span>
                        <span className="HRole">{user.role}</span>
                    </div>
                </div>

                <div className="notification">
                    <MdNotificationsNone className="HBicons"/>
                </div>
            </div>
        </header>
    );
}