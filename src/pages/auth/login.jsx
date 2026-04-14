import {  useState } from "react";
import { FaRegEnvelope, FaEye, FaEyeSlash } from "react-icons/fa"
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/auth.service";
import { useAuth } from "../../Auth/useAuth";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errPassword, setErrPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (loading) return;

    setMessage("");
    setLoading(true);

    try {
      const data = await authService.login(formData);

      if (data.status === "success") {
        login(data);
        navigate("/", { replace: true });

      }
      else {
        setMessage("Incorrect Email or password.");
        setErrPassword(true);
        setFormData((prev)=>({
          ...prev,
          password: ""
        }));
        
      }

    } catch (error) {
      setMessage("Server error");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="Ldiv">
      <form onSubmit={handleSubmit}>
        <div className="title-container">
          <h1>Welcome back</h1>
          <p className="pd">Please enter your details</p>
        </div>
        <label htmlFor="email">Email profissionnel</label>
        <div className="inputContainer">
          <FaRegEnvelope className="icon iconLeft"/>
          <input id="email"
            value={formData.email}
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="name@universite.com"
            required
          />
        </div>

        <label htmlFor="pwd">Password</label>
        <div className="inputContainer">
          <RiLockPasswordLine className="icon iconLeft" />
          <input 
            id="pwd" 
            type={showPassword ? "text" : "password"}
            name="password" 
            value={formData.password}
            className={errPassword ? "input-error shake" : ""}
            onChange={(e)=>{
              handleChange(e);
              setErrPassword(false);
            }} 
            placeholder="........" 
            required
          />
          <span className="icon iconRight" onClick={()=> setShowPassword(!showPassword)}>
              {
                showPassword? <FaEye /> : <FaEyeSlash/>
              }
          </span>
        </div>

        <div className='RememberMe'>
          <span>
            <input type="checkbox" id='ckb'/>
            <label htmlFor='ckb'>Remember me(30d)</label>
          </span>
          <button type="button" onClick={()=> navigate("/forget-password")} id='FPWD'>Forgot password?</button>
        </div>

        <button type="submit" className="Lbtn" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </button>

        {message && <p style={{ marginTop: "10px", color: "red"}}>{message}</p>}

        <p className="PSup">
          Don't have an account?{" "}
          <button type="button" onClick={()=> navigate("/register")} className="ToggBtn">
            Sign up
          </button>
        </p>

      </form>
    </div>
    </>
  );
}