import { useState } from "react";

export default function Register({ toggleForm }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
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

    setMessage("");

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8000/api/register.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: formData.username,
            email: formData.email,
            password: formData.password
          })
        }
      );

      const data = await response.json();

      if (data.status === "success") {
        setMessage("Registered successfully ✅");
        setTimeout(() => {
          toggleForm();
        }, 1000);
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
    <div className="Rdiv">
      <form onSubmit={handleSubmit}>
        <h1>Create an Account</h1>
        <p className="pd">Please enter your details</p>

        <label htmlFor="FN">Full Name</label>
        <input id="FN" type="text" name="username" className="Tinput" onChange={handleChange} required/>

        <label htmlFor="Remail">Email address</label>
        <input id="Remail" type="email" name="email" className="Tinput" onChange={handleChange} required/>

        <label htmlFor="rpwd">Password</label>
        <input
          id="rpwd" type="password" name="password" className="Tinput" onChange={handleChange} required/>

        <label htmlFor="cpwd">Confirm Password</label>
        <input id="cpwd" type="password" name="confirmPassword" className="Tinput" onChange={handleChange} required/>

        <div className='RememberMe'>
          <span>
            <input type="checkbox" id='Termsckb'/> 
            <label htmlFor='Termsckb'>I accept all <a href="#">terms & conditions</a></label>
          </span>
        </div>

        <button type="submit" className="Lbtn" disabled={loading}>
          {loading ? "Signing up..." : "Sign up"}
        </button>

        {message && <p style={{ marginTop: "10px" }}>{message}</p>}

        <p className="PSup">Already have an account?{" "}
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