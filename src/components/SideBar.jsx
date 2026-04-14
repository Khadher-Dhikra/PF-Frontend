import academicCap from "../assets/academic-cap.png";
import { NavLink } from "react-router-dom";
import { sidebarConfig } from "../config/sidebar.config";
import { useAuth } from "../Auth/useAuth";
import { useState } from "react";

export default function SideBar() {
    const { user } = useAuth();
    const menu = sidebarConfig[user?.role] || [];
    const [activeLink, setActiveLink] = useState();

    return(
        <div className="sideBar-container">

            <div className="sideBarLogoContainer">
                <div className="SBCapLogo">
                    <img src={academicCap} alt="academicCap" />
                </div>

                <div>
                    <span>FST-SBZ-Academia</span>
                    <span className="HRole">{user.role}</span>
                </div>
            </div>

            <div className="SdiebarNavigation">
                <p>Navigaton</p>
                <ul>
                    {menu.map((item, index) =>{
                        const Icon = item.icon;
                        return(
                            <li key={index}
                                onClick={()=> {setActiveLink(index)}}
                            >
                                <NavLink to={item.path}
                                    className={
                                    activeLink === index
                                    ? "link active"
                                    : "link"
                                }
                                >
                                    <Icon className="navigationIcon"/>
                                    <span>{item.title}</span>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>   
            </div>
        </div>
    );
}