import { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { authService } from "../../../services/auth.service";

export default function ForgotPassword() {
  const [email, setEmail]     = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const data = await authService.forgotPassword({ email });

      if (data.status === "error") {
        setMessage(data.message);
      } else {
        setMessage("Check your email for a link to reset your password. If it doesn’t appear within a few minutes, check your spam folder.");
        setSent(true);
      }

    } catch (error) {
      setMessage("Server error");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="Ldiv">
      <form onSubmit={handleSubmit}>
        {!sent ? (
          <>
          <div className="title-container">
            <h1>Forgot Password</h1>
            <p className="pd">Enter your email to reset your password</p>
          </div>

          <label htmlFor="femail">Email address</label>
          <div className="inputContainer">
            <FaRegEnvelope className="icon iconLeft" />
            <input
              id="femail"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@gmail.com"
              required
            />
          </div>

          <button type="submit" className="Lbtn" disabled={loading}>
            {loading ? "Sending..." : "Send reset link"}
          </button>
          </>
        ) : (
          <>
            <div className="title-container">
              <h1>Check your email</h1>
            </div>
            <span>{message}</span>
          </>
        )}
        

        {!sent && message && <p style={{ marginTop: "10px" }}>{message}</p>}

        <p className="PSup">
          Remember your password?{" "}
          <button
            type="button"
            onClick={()=> navigate("/login")}
            className="ToggBtn"
          >
            Sign in
          </button>
        </p>
      </form>
    </div>
  );
}