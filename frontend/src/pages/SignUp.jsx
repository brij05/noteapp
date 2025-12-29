import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router";

function Signup() {
  const navigate=useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/auth/signup", {
  name,
  email,
  password
});

      console.log(response);
      if(response.data.success){
        navigate('/login')
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="main">
      <h2 id="heading">Sign Up</h2>

      <form onSubmit={handelSubmit}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            id="name"
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit">Sign Up</button>

        <p>
          Already have an account? <Link to='/Login'>login</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
