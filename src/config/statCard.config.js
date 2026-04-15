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
        },
        {
            title: "Reports",
            icon:  FaRegFileAlt,
        },
        {
            title: "Next Deadline",
            icon:  FiCalendar,
        },
    ],
    
    coordinator: [
        {
            title: "Students",
            icon:  MdOutlineGroup,
        },
        {
            title: "Tutors",
            icon:  IoBookOutline,
        },
        {
            title: "Jury Members",
            icon:  MdOutlineAccountCircle,
        },
        {
            title: "Active Projects",
            icon:  LuFolderOpen,
        },
        
    ],

    tutor: [
        {
            title: "Mentored Students",
            icon:  LuFolderOpen,
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