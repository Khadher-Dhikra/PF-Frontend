import { LuLayoutDashboard, LuFolderOpen, LuUpload, LuMessageSquare, LuClipboardCheck } from "react-icons/lu";
import { FaRegFileAlt } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { IoSettingsOutline, IoBookOutline  } from "react-icons/io5";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { MdOutlineAccountCircle, MdOutlineGroup } from "react-icons/md";

export const sidebarConfig ={
    student: [
        {
            title: "Dashboard",
            path: "student/dashboard",
            icon:  LuLayoutDashboard,
        },

        {
            title: "My Project",
            path: "student/My-Project",
            icon:  LuFolderOpen,
        },

        {
            title: "Reports",
            path: "student/reports",
            icon:  FaRegFileAlt,
        },

        {
            title: "Defense",
            path: "student/defense",
            icon:  FiCalendar,
        },

        {
            title: "Deliverables",
            path: "student/deliverables",
            icon:  LuUpload,
        },

        {
            title: "Settings",
            path: "student/settings",
            icon:  IoSettingsOutline,
        },
    ],
    
    coordinator: [
        {
            title: "Dashboard",
            path: "coordinator/dashboard",
            icon: LuLayoutDashboard,
        },

        {
            title: "Students",
            path: "coordinator/students",
            icon: HiOutlineAcademicCap,
        },

        {
            title: "Tutors",
            path: "coordinator/tutors",
            icon: IoBookOutline,
        },

        {
            title: "Jury",
            path: "coordinator/jury",
            icon: MdOutlineAccountCircle,
        },

        {
            title: "Projects",
            path: "coordinator/projects",
            icon: LuFolderOpen,
        },

        {
            title: "Defenses",
            path: "coordinator/defenses",
            icon: FiCalendar,
        },

        {
            title: "Settings",
            path: "coordinator/settings",
            icon: IoSettingsOutline,
        },
    ],

    tutor: [
        {
            title: "Dashboard",
            path: "tutor/dashboard",
            icon: LuLayoutDashboard,
        },

        {
            title: "My Students",
            path: "tutor/my-students",
            icon: MdOutlineGroup ,
        },

        {
            title: "Supervised Projects",
            path: "tutor/supervised-projects",
            icon: LuFolderOpen,
        },

        {
            title: "Reports",
            path: "tutor/reports",
            icon: FaRegFileAlt,
        },

        {
            title: "Messages",
            path: "tutor/messages",
            icon: LuMessageSquare,
        },

        {
            title: "Settings",
            path: "tutor/settings",
            icon: IoSettingsOutline,
        },
    ],

    jury: [
        {
            title: "Dashboard",
            path: "jury/dashboard",
            icon: LuLayoutDashboard,
        },

        {
            title: "Defenses",
            path: "jury/defenses",
            icon: FiCalendar,
        },

        {
            title: "Evaluation",
            path: "jury/evaluation",
            icon: LuClipboardCheck,
        },

        {
            title: "Reports",
            path: "jury/reports",
            icon: FaRegFileAlt,
        },

        {
            title: "Settings",
            path: "jury/settings",
            icon: IoSettingsOutline,
        },
    ]
}