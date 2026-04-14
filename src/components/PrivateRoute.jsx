import { Navigate } from "react-router-dom";
import { useAuth } from "../Auth/useAuth";

function getDashboardByRole(role) {
  switch (role) {
    case "student":
      return "/student/dashboard"
        case "tutor":
      return "/tutor/dashboard"
        case "coordinator":
      return "/coordinator/dashboard"
        case "jury":
      return "/jury/dashboard"
        default:
      return "/login"
    }
}

export default function PrivateRoute({ children, roles }) {

  const { user, loading } = useAuth();

  if (loading) return null;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (roles && !roles.includes(user.role)) {
    return <Navigate to={getDashboardByRole(user.role)} replace />;
  }

  return children;
}