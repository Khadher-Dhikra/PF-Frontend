import { useState } from 'react';

export default function Login({ toggleForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    const response = await fetch("http://localhost:8000/api/login.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.status === "success") {
      console.log("Logged in:", data.user);
      alert(`Welcome back, ${data.user.username}`);
    } else {
      alert(data.message);
    }
  };

  return (
    <div className='Ldiv'>
      <form onSubmit={handleSubmit}>
        <h1>Welcome back</h1>
        <p className='pd'>Please enter your details</p>

        <label htmlFor="emailAdd">Email address</label>
        <input type="email" id='emailAdd' className='Tinput' value={email} onChange={e => setEmail(e.target.value)} />

        <label htmlFor="pwd">Password</label>
        <input type="password" id='pwd' className='Tinput' value={password} onChange={e => setPassword(e.target.value)} />

        <div className='RememberMe'>
          <span>
            <input type="checkbox" id='ckb'/>
            <label htmlFor='ckb'>Remember me</label>
          </span>
          <a href="#" id='FPWD'>Forgot password</a>
        </div>

        <input type="submit" value="Sign in" className='Lbtn'/>

        <p className='PSup'>
          Don't have an account? 
          <button type="button" className="ToggBtn" onClick={toggleForm}>Sign up</button>
        </p>
      </form>
    </div>
  );
}