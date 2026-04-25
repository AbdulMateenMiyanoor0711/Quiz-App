import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import auth from "./../auth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = auth.getCookies();
  const navigate = useNavigate();

  useEffect(() => {
    if (isValid) {
      console.log("check here", isValid);
      navigate("/");
      return;
    }
  }, [navigate, isValid]);

  const addUser = async () => {
    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/add-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          password: password,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.msg || "something went wrong");
      }

      setName("");
      setEmail("");
      setPassword("");
      alert("User Register Succesfull");
      navigate("/login");
    } catch (error) {
      console.log(error);

      alert(error.message);
    }
  };

  return (
    <>
      <h1>Please Enter Your Details To </h1>
      <div >
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div >
        <button  onClick={addUser}>
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
