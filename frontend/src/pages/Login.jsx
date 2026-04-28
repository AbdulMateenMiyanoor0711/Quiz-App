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
      const userId = data.user?.id;
      if (userId) {
        localStorage.setItem("userId", userId); // save SQL id
        console.log("Saved userId:", userId);
      } else {
        console.warn("No userId in response:", data);
      }
      let dummy = {
        token: "abc_token",
        msg: "login success",
      };
      auth.setCookies(dummy.token);
      setemail("");
      setpassword("");
      window.location.href = "/";

      alert("User Login SuccesFul");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    /* FIGMA */
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-heading">Enter you Details For Login</h1>
        <p className="login-subtitle">Welcome back! Please sign in to continue.</p>
        <div>
          {/* FIGMA */}
          <div className="form-group">
            <label className="form-label">Email <span className="required">*</span></label>
            <input
              className="form-input"
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(event) => setemail(event.target.value)}
            />
          </div>

          {/* FIGMA */}
          <div className="form-group">
            <label className="form-label">Password <span className="required">*</span></label>
            <input
              className="form-input"
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(event) => setpassword(event.target.value)}
            />
          </div>

          {/* FIGMA */}
          <div>
            <button className="btn-primary" onClick={verifyUsers}>Login</button>
            <p className="login-footer">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
