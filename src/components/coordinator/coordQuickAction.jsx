import { HiOutlineAcademicCap } from "react-icons/hi2";
import { IoBookOutline  } from "react-icons/io5";
import { FiCalendar, FiUserCheck } from "react-icons/fi";
import { LuFolderOpen } from "react-icons/lu";

export default function CoordQuickAction() {
    return(
        <>
            <div className="PInformationTitle">
                <h2>Quick Actions</h2>
            </div>

            <div className="QAButtons">
                <button>
                    <div><HiOutlineAcademicCap className="QABtnIcon"/></div>
                    Create a Student Account
                </button>
                
                <button>
                    <div><IoBookOutline className="QABtnIcon"/></div>
                    Create a Tutor Account
                </button>

                <button>
                    <div><FiUserCheck className="QABtnIcon"/></div>
                    Create a Jury Account
                </button>

                <button>
                    <div><LuFolderOpen className="QABtnIcon"/></div>
                    Assign a Project
                </button>

                <button>
                    <div><FiCalendar className="QABtnIcon"/></div>
                    Schedule a Defense
                </button>
            </div>
        </>
    );
}