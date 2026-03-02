import { useState } from 'react';

export default function Register({ toggleForm }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const response = await fetch("http://localhost:8000/api/register.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password })
    });

    const data = await response.json();

    if (data.status === "success") {
      alert("Account created! You can login now.");
      toggleForm(); // ارجع لصفحة login
    } else {
      alert(data.message);
    }
  };

  return (
    <div className='Rdiv'>
      <form onSubmit={handleSubmit}>
        <h1>Create an Account</h1>
        <p className='pd'>Please enter your details</p>

        <label htmlFor="name">Full Name</label>
        <input type="text" id='name' className='Tinput' value={username} onChange={e => setUsername(e.target.value)} />

        <label htmlFor="RemailAdd">Email address</label>
        <input type="email" id='RemailAdd' className='Tinput' value={email} onChange={e => setEmail(e.target.value)} />

        <label htmlFor="Rpwd">Password</label>
        <input type="password" id='Rpwd' className='Tinput' value={password} onChange={e => setPassword(e.target.value)} />

        <label htmlFor="cRpwd">Confirm Password</label>
        <input type="password" id='cRpwd' className='Tinput' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />

        <div className='RememberMe'>
          <span>
            <input type="checkbox" id='Termsckb'/> 
            <label htmlFor='Termsckb'>I accept all <a href="#">terms & conditions</a></label>
          </span>
        </div>

        <input type="submit" value="Sign up" className='Lbtn'/>

        <p className='PSup'>
          Already have an account? 
          <button type="button" className="ToggBtn" onClick={toggleForm}>Sign in</button>
        </p>
      </form>
    </div>
  );
}