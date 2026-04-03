import { useState } from "react";

export default function CEmail() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:8000/api/forgot-password.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.status === "error") {
        setMessage(data.message);
      } else {
        setMessage("Check your email for a link to reset your password. If it doesn’t appear within a few minutes, check your spam folder.");
        setSent(true);
      }

    } catch (err) {
      setMessage("Error sending request.");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSendEmail}>
        {!sent ? (
          <>
            <p>Enter your email to receive a reset link.</p>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button className="Fbutton" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send reset link"}
            </button>
          </>
        ) : (
          <span>{message}</span>
        )}

        {!sent && message && <p>{message}</p>}
      </form>
    </>
  );
}