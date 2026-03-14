import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import auth from "../support/auth";

const Login = () => {
  const isValid = auth.getCookies();
  const navigate = useNavigate();

  useEffect(() => {
    if (isValid) {
      console.log("check here", isValid);
      navigate("/");
      return;
    }
  }, []);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const verifyUsers = async () => {
    if (!email || !password) {
      alert("Email and password are required");
      return;
    }

    try {
      const response = await fetch("http://localhost:8050/verify-user", {
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
      let dumnmy = {
        token: "abc_token",
        msg: "login success",
      };
      auth.setCookies(dumnmy.token);
      setemail("");
      setpassword("");
      window.location.href = "/";
      alert("User Login SuccesFul");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <h1>Enter you Details For Login</h1>
      <div className="login_body">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="logininput"
          value={email}
          onChange={(event) => setemail(event.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Your Password"
          className="logininput"
          value={password}
          onChange={(event) => setpassword(event.target.value)}
        />

        <div className="buttonarea">
          <button onClick={verifyUsers} className="loginbutton">
            Login
          </button>
          <p className="auth_switch">
            Don't have an account? <Link to="/signup">Register</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
