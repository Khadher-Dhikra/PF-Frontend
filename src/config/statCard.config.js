import { LuFolderOpen, LuClipboardCheck, LuMessageSquare } from "react-icons/lu";
import { FaRegFileAlt } from "react-icons/fa";
import { FiCalendar, FiUserCheck } from "react-icons/fi";
import { MdOutlineGroup } from "react-icons/md";
import { IoBookOutline  } from "react-icons/io5";

export const statCardConfig = {

    student: [
        { title: "My Project", icon: LuFolderOpen, key: "projects" },
        { title: "Reports", icon: FaRegFileAlt, key: "reports" },
        { title: "Next Deadline", icon: FiCalendar, key: "deadline" },
    ],

    coordinator: [
        { title: "Students", icon: MdOutlineGroup, key: "students" },
        { title: "Tutors", icon: IoBookOutline, key: "tutors" },
        { title: "Jury Members", icon: FiUserCheck, key: "jury" },
        { title: "Active Projects", icon: LuFolderOpen, key: "projects" },
    ],

    tutor: [
        { title: "Mentored Students", icon: MdOutlineGroup, key: "students" },
        { title: "Active Projects", icon: LuFolderOpen, key: "projects" },
        { title: "Reports To Validate", icon: FaRegFileAlt, key: "reports" },
        { title: "Messages", icon: LuMessageSquare, key: "messages" },
    ],

    jury: [
        { title: "Upcoming Defenses", icon: FiCalendar, key: "defenses" },
        { title: "Reports to Read", icon: FaRegFileAlt, key: "reports" },
        { title: "Evaluations Completed", icon: FiCalendar, key: "evaluations" },
        { title: "Average Grade", icon: FiCalendar, key: "average" },
    ]
};