import { Navigate } from "react-router-dom";
import { useAuth } from "../Auth/useAuth";

export default function RedirectByRole() {
    const { user } = useAuth();

    if(!user) {
        return <Navigate to="/login" replace />
    }

    switch (user.role) {
        case "student":
            return <Navigate to="/student/dashboard" replace/>
        case "tutor":
            return <Navigate to="/tutor/dashboard" replace/>
        case "coordinator":
            return <Navigate to="/coordinator/dashboard" replace/>
        case "jury":
            return <Navigate to="/jury/dashboard" replace/>
        default:
            return <Navigate to="/login" replace/>
    }
}