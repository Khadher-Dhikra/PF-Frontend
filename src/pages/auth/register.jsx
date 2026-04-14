import { useState } from "react";
import { FaRegEnvelope, FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/auth.service";

export default function Register() {
  const navigate = useNavigate();

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
      const data = await authService.register({
        username: formData.username,
        email: formData.email,
        password: formData.password
      });

      if (data.status === "success") {
        setMessage("Registered successfully ✅");
        navigate("/login")
      } else {
        setMessage(data.message);
      }

    } catch (error) {
      setMessage(error.response?.data?.message || "Server error");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="Rdiv">
      <form onSubmit={handleSubmit}>
        <div className="title-container">
          <h1>Create an Account</h1>
          <p className="pd">Please enter your details</p>
        </div>
        <label htmlFor="FN">Full Name</label>
        <div className="inputContainer">
          <FaRegUser className="icon iconLeft" />
          <input id="FN" type="text" name="username" onChange={handleChange} placeholder="Your Name" required/>
        </div>

        <label htmlFor="Remail">Email address</label>
        <div className="inputContainer">
          <FaRegEnvelope className="icon iconLeft" />
          <input id="Remail" type="email" name="email" onChange={handleChange} placeholder="name@gmail.com" required/>
        </div>

        <label htmlFor="rpwd">Password</label>
        <div className="inputContainer">
          <RiLockPasswordLine className="icon iconLeft" />
          <input id="rpwd" type="password" name="password" onChange={handleChange} placeholder="........" required/>
        </div>

        <label htmlFor="cpwd">Confirm Password</label>
        <div className="inputContainer">
          <RiLockPasswordLine className="icon iconLeft" />
          <input id="cpwd" type="password" name="confirmPassword" onChange={handleChange} placeholder="........" required/>
        </div>

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