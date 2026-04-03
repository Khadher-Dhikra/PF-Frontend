import { useState } from "react";

export default function Login({ toggleForm, goToForgot }) {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

     ("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8000/api/login.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (data.status === "success") {
        setMessage("Login successful ✅");

        console.log("User:", data.user);

      } else {
        // setMessage(data.message);
        setMessage("Incorrect Email or password.");
      }

    } catch (error) {
      setMessage("Server error");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <>
    <div className="Ldiv">
      <form onSubmit={handleSubmit}>
        <h1>Welcome back</h1>
        <p className="pd">Please enter your details</p>

        <label htmlFor="email">Email address</label>
        <input id="email" type="email" name="email" className="Tinput" onChange={handleChange} required/>

        <label htmlFor="pwd">Password</label>
        <input id="pwd" type="password" name="password" className="Tinput" onChange={handleChange} required/>

        <div className='RememberMe'>
          <span>
            <input type="checkbox" id='ckb'/>
            <label htmlFor='ckb'>Remember me</label>
          </span>
          <button type="button" onClick={goToForgot} id='FPWD'>Forgot password</button>
        </div>

        <button type="submit" className="Lbtn" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </button>

        {message && <p style={{ marginTop: "10px", color: "red"}}>{message}</p>}

        <p className="PSup">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={toggleForm}
            className="ToggBtn"
          >
            Sign up
          </button>
        </p>
      </form>
    </div>
    </>
  );
}