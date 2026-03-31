import { useState } from "react";

export default function ResetPassword() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: ""
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Récupérer le token depuis l'URL
  const token = new URLSearchParams(window.location.search).get("token");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    if (formData.password.length < 8) {
      setMessage("Password must be at least 8 characters");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8000/api/reset-password.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            token: token,
            password: formData.password
          })
        }
      );

      const data = await response.json();

      if (data.status === "success") {
        setMessage("Password reset successfully ✅");
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } else {
        setMessage(data.message);
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
        <h1>Reset Password</h1>
        <p className="pd">Enter your new password</p>

        <label htmlFor="npwd">New Password</label>
        <input
          id="npwd"
          type="password"
          name="password"
          className="Tinput"
          onChange={handleChange}
          required
        />

        <label htmlFor="cpwd">Confirm Password</label>
        <input
          id="cpwd"
          type="password"
          name="confirmPassword"
          className="Tinput"
          onChange={handleChange}
          required
        />

        <button type="submit" className="Lbtn" disabled={loading}>
          {loading ? "Resetting..." : "Reset Password"}
        </button>

        {message && <p style={{ marginTop: "10px" }}>{message}</p>}
      </form>
    </div>
  );
}