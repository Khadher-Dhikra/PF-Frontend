import { useState, useEffect } from "react";
import DivImage from '../../UI/divimage';
import { useNavigate } from "react-router-dom";

export default function RPwd() {
  const [token, setToken] = useState(null);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("token");

    if (!t) {
      setTimeout(() => {
        setMessage("Invalid access. Use email link.");
      }, 0);
    } else {
      setTimeout(() => {
        setToken(t);
      }, 0);
      
    }
  }, []);

  const handleReset = async (e) => {
    e.preventDefault();
    if (!token) {
      setMessage("Invalid token.");
      return;
    }

    if (password.length < 6) {
      setMessage("Password too short.");
      return;
    }

    if (password !== confirm) {
      setMessage("Passwords do not match.");
      return;
    }

    const res = await fetch("http://localhost:8000/api/reset-password.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, newPassword: password }),
    });

    const data = await res.json();

    if (data.success) {
      setMessage("Password updated successfully. Redirecting...");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setMessage("Invalid or expired link.");
    }
  };

  return (
    <>
      <div className="CEmailDiv">
        <div className="CEM">
          <form onSubmit={handleReset}>
          <p>Enter your new password</p>
          <label>New Password</label>
          <input type="password"
            onChange={(e) => setPassword(e.target.value)} />

          <label>Confirm Password</label>
          <input type="password"
            onChange={(e) => setConfirm(e.target.value)} />

          <button className="Fbutton" type="submit">Reset Password</button>

          {message && <p>{message}</p>}
          </form>
        </div>
      </div>
      <DivImage />
    </>
  );
}