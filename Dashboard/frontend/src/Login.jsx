import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    console.log(email,password)
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({  email, password }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("please enter details");
    }
  };
  return (
    <div>
      <div className="login">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label>password</label>
        <input
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button type="submit" className="btn btn-primary" onClick={handleLogin}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
