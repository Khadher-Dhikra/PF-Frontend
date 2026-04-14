import { Outlet, useLocation } from 'react-router-dom';
import InfoPanel      from '../components/InfoPanel';
import '../styles/Auth.css';

export default function AuthLayout() {
  const location = useLocation();
  const isRegister = location.pathname.includes("register");
  return (
    <div className='Auth-container'>
      {isRegister && <InfoPanel />}
      <Outlet />
      {!isRegister && <InfoPanel />}
    </div>
  );
}