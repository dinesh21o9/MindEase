import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/loginForm.css";
import { FaUserTie, FaLock } from "react-icons/fa";
import axios from "axios";

const BASE_URL = "http://localhost:7000";
// const BASE_URL = "https://mental-health-backend-9k4q.onrender.com"

const LoginForm = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();


  //   <ResultsPage
  //   score={totalScore}
  //   analysis={analysis}
  //   mentalStability={anxietyRiskAnalysis}
  //   anxietyAttackRisk={anxietySeverity}
  //   recommendedActions={recommendedActions}
  // />



    try {
      const response = await axios.post(`${BASE_URL}/login`, loginFormData);
      // console.log('Login Response :', response.data);

      if (response.data.status === "success") {
        console.log(response.data.userId);
        // navigate('/home',  {state: {userId: response.data.userId} });
        // -------- Returning to the todo list --------
        navigate("/home", { state: { userId: response.data.userId } });
      } else {
        alert("No User Found!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="wapper">
        <form onSubmit={handleSubmit}>
          <h1>LOGIN</h1>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={loginFormData.email}
              onChange={handleChange}
              required
            />
            <FaUserTie className="icon" />
          </div>
          {/* ----Password--- */}
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={loginFormData.password}
              onChange={handleChange}
              required
            />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              {" "}
              <input type="checkbox" /> Remember me
            </label>
            <a href="/">Forgot password?</a>
          </div>

          <button type="submit" className="login_button">
            Login
          </button>

          <div className="register-link">
            <p>
              Don't have an account? <Link to="/regis">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
