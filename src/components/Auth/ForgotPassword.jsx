import { useState } from "react";

export default function ForgotPassword({ toggleForm }) {
  const [email, setEmail]     = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8000/api/forgot-password.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email })
        }
      );

      const data = await response.json();
      setMessage(data.message);

    } catch (error) {
      setMessage("Server error");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="Ldiv">
      <form onSubmit={handleSubmit}>
        <h1>Forgot Password</h1>
        <p className="pd">Enter your email to reset your password</p>

        <label htmlFor="femail">Email address</label>
        <input
          id="femail"
          type="email"
          name="email"
          className="Tinput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit" className="Lbtn" disabled={loading}>
          {loading ? "Sending..." : "Send reset link"}
        </button>

        {message && <p style={{ marginTop: "10px" }}>{message}</p>}

        <p className="PSup">
          Remember your password?{" "}
          <button
            type="button"
            onClick={toggleForm}
            className="ToggBtn"
          >
            Sign in
          </button>
        </p>
      </form>
    </div>
  );
}