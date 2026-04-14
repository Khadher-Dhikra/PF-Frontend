import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout      from '../Layouts/AuthLayout';
import Login           from '../pages/auth/login';
import RPwd            from "../pages/auth/password reset/resetPassword";
import PrivateRoute    from "../components/PrivateRoute";
import Register        from '../pages/auth/register';
import ForgotPassword  from "../pages/auth/password reset/ForgotPassword";
import DashboardLayout from '../Layouts/DashboardLayout';
import RedirectByRole from './RedirectByRole';

//Student imports
import StudentDashboard from '../pages/Student/StudentDashboard';
import StudentPorjects from "../pages/Student/StudentProjects";
import StudentReports from '../pages/Student/StudentReports';
import StudentDefense from '../pages/Student/StudentDefense';
import StudentDeliverables from '../pages/Student/StudentDeliverables';
import StudentSettings from '../pages/Student/StudentSettings';
//Tutor imports
import TutorDashboard from '../pages/tutor/tutorDashboard';
//Coordinator imports
import CoordinatorDashboard from '../pages/coordinator/coordinatorDashboard';
//Juty imports
import JuryDashboard from '../pages/jury/juryDashboard';

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>

            <Route path='/' element={<RedirectByRole />}/>

            <Route element={<AuthLayout />}>
                <Route path="/login"             element={<Login />}/>
                <Route path="/register"          element={<Register />} />
                <Route path="/forget-password"   element={<ForgotPassword />} />
                <Route path="/reset-password"    element={<RPwd />} />
            </Route>

            <Route element={
                <PrivateRoute>
                    <DashboardLayout />
                </PrivateRoute>}
            >
                {/*Student*/}
                <Route path="/student/dashboard" element={
                    <PrivateRoute roles={["student"]}>
                        <StudentDashboard />
                    </PrivateRoute>
                }/>
                <Route path="/student/My-Project" element={
                    <PrivateRoute roles={["student"]}>
                        <StudentPorjects />
                    </PrivateRoute>
                }/>
                <Route path="/student/reports" element={
                    <PrivateRoute roles={["student"]}>
                        <StudentReports />
                    </PrivateRoute>
                }/>
                <Route path="/student/defense" element={
                    <PrivateRoute roles={["student"]}>
                        <StudentDefense />
                    </PrivateRoute>
                }/>
                <Route path="/student/deliverables" element={
                    <PrivateRoute roles={["student"]}>
                        <StudentDeliverables />
                    </PrivateRoute>
                }/>
                <Route path="/student/settings" element={
                    <PrivateRoute roles={["student"]}>
                        <StudentSettings />
                    </PrivateRoute>
                }/>

                {/*Tutor*/}
                <Route path="/tutor/dashboard" element={
                    <PrivateRoute roles={["tutor"]}>
                        <TutorDashboard />
                    </PrivateRoute>
                }/>
                
                {/*Coordinator*/}
                <Route path="/coordinator/dashboard" element={
                    <PrivateRoute roles={["coordinator"]}>
                        <CoordinatorDashboard />
                    </PrivateRoute>
                }/>

                {/*Jury*/}
                <Route path="/jury/dashboard" element={
                    <PrivateRoute roles={["jury"]}>
                        <JuryDashboard />
                    </PrivateRoute>
                }/>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

