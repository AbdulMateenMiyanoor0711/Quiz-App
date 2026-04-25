import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import auth from "./../auth";
const Login = () => {
  const isValid = auth.getCookies();
  const navigate = useNavigate();

  useEffect(() => {
    if (isValid) {
      console.log("check here", isValid);
      return;
    }
  }, [navigate, isValid]);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const verifyUsers = async () => {
    if (!email || !password) {
      alert("Email and password are required");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/verify-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.msg || "Login failed");
      }
      if (data.success) {
        localStorage.setItem("userId", data.userId); // save SQL id
        console.log("Saved:", data.userId);
      }
      let dummy = {
        token: "abc_token",
        msg: "login success",
      };
      auth.setCookies(dummy.token);
      setemail("");
      setpassword("");
      window.location.href = "/dashboard";

      alert("User Login SuccesFul");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <h1>Enter you Details For Login</h1>
      <div>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(event) => setemail(event.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(event) => setpassword(event.target.value)}
        />

        <div>
          <button onClick={verifyUsers}>Login</button>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
