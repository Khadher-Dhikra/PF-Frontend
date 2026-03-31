import { useState, useEffect } from 'react';
import Auth from './components/Auth/Auth';
import ResetPassword from './components/Auth/ResetPassword';

function App() {
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    // Si l'URL contient /reset-password?token=...
    const token = new URLSearchParams(window.location.search).get("token");
    if (window.location.pathname === "/reset-password" && token) {
      setIsReset(true);
    }
  }, []);

  return (
    <>
      {isReset ? <ResetPassword /> : <Auth />}
    </>
  );
}

export default App