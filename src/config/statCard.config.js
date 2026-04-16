import { LuFolderOpen, LuClipboardCheck, LuMessageSquare } from "react-icons/lu";
import { FaRegFileAlt } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { MdOutlineAccountCircle, MdOutlineGroup } from "react-icons/md";
import { IoBookOutline  } from "react-icons/io5";

export const statCardConfig = {
    student: [
        {
            title: "My Project",
            icon:  LuFolderOpen,
            key: "projects"
        },
        {
            title: "Reports",
            icon:  FaRegFileAlt,
            key: "reports"
        },
        {
            title: "Next Deadline",
            icon:  FiCalendar,
            key: "deadline"
        },
    ],
    
    coordinator: [
        {
            title: "Students",
            icon:  MdOutlineGroup,
            key: "students"
        },
        {
            title: "Tutors",
            icon:  IoBookOutline,
            key: "tutors"
        },
        {
            title: "Jury Members",
            icon:  MdOutlineAccountCircle,
            key: "jury"
        },
        {
            title: "Active Projects",
            icon:  LuFolderOpen,
            key: "projects"
        },
        
    ],

    tutor: [
        {
            title: "Mentored Students",
            icon:  MdOutlineGroup,
        },
        {
            title: "Active Projects",
            icon:  LuFolderOpen,
        },
        {
            title: "Reports To Validate",
            icon:  FaRegFileAlt,
        },
        {
            title: "Messages",
            icon:  LuMessageSquare,
        },
    ],

    jury: [
        {
            title: "Upcoming Defenses",
            icon:  FiCalendar,
        },
        {
            title: "Evaluations Completed",
            icon:  FiCalendar,
        },
        {
            title: "Average Grade",
            icon:  FiCalendar,
        },
        {
            title: "Reports to Read",
            icon:  FiCalendar,
        },
    ]
}