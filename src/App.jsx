import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import RPwd from "./components/Auth/password reset/resetPassword";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/reset-password" element={<RPwd />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App