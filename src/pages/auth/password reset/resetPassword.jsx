import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RiLockPasswordLine } from "react-icons/ri";
import { authService } from "../../../services/auth.service";

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

    const data = await authService.resetPassword({ token, newPassword: password });

    if (data.success) {
      setMessage("Password updated successfully. Redirecting...");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      setMessage("Invalid or expired link.");
    }
  };

  return (
    <>
      <div className="Ldiv">
          <form onSubmit={handleReset}>

            <div className="title-container">
              <h1>Reset your password</h1>
              <p>Enter your new password</p>
            </div>
            

          <label>New Password</label>
          <div className="inputContainer">
            <RiLockPasswordLine className="icon iconLeft" />
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
          </div>

          <label>Confirm Password</label>
          <div className="inputContainer">
            <RiLockPasswordLine className="icon iconLeft" />
            <input type="password" onChange={(e) => setConfirm(e.target.value)} />
          </div>

          <button className="Lbtn" type="submit">Reset Password</button>

          {message && <p>{message}</p>}
          </form>
      </div>
    </>
  );
}