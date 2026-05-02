import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  //define state variables using usestate hook that will be used to maage the inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    feedback: [],
  });

  // Password strength checker function
  const checkPasswordStrength = (password) => {
    const feedback = [];
    let score = 0;

    // Check password length
    if (password.length >= 8) {
      score += 1;
    } else {
      feedback.push("Password should be at least 8 characters long");
    }

    // Check for lowercase letters
    if (/[a-z]/.test(password)) {
      score += 1;
    } else {
      feedback.push("Include lowercase letters");
    }

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
      score += 1;
    } else {
      feedback.push("Include uppercase letters");
    }

    // Check for numbers
    if (/[0-9]/.test(password)) {
      score += 1;
    } else {
      feedback.push("Include numbers");
    }

    // Check for special characters
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      score += 1;
    } else {
      feedback.push("Include special characters");
    }

    // Determine strength level
    let strengthLevel = "";
    if (score <= 2) {
      strengthLevel = "Weak";
    } else if (score <= 4) {
      strengthLevel = "Medium";
    } else {
      strengthLevel = "Strong";
    }

    return {
      score,
      feedback,
      strengthLevel,
    };
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (newPassword.length > 0) {
      const strength = checkPasswordStrength(newPassword);
      setPasswordStrength(strength);
    } else {
      setPasswordStrength({
        score: 0,
        feedback: [],
        strengthLevel: "",
      });
    }
  };

  // Get color based on password strength
  const getStrengthColor = () => {
    if (passwordStrength.score <= 2) return "danger";
    if (passwordStrength.score <= 4) return "warning";
    return "success";
  };

  const submit = async (e) => {
    e.preventDefault();

    // Check password strength before submitting
    if (passwordStrength.score < 3) {
      setError(
        "Please choose a stronger password. Your password should meet at least 3 of the 5 criteria."
      );
      return;
    }

    setLoading("Please wait as we upload your data...");
    setError("");
    setSuccess("");

    try {
      const data = new FormData();
      data.append("username", username);
      data.append("email", email);
      data.append("password", password);
      data.append("phone", phone);

      const response = await axios.post(
        "https://calebnjogu.pythonanywhere.com/api/signup",
        data
      );
      setLoading("");
      setSuccess(response.data.message);
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-4">
        <h2>Signup</h2>
        <form onSubmit={submit}>
          {loading && <div className="alert alert-info">{loading}</div>}
          {success && <div className="alert alert-success">{success}</div>}
          {error && <div className="alert alert-danger">{error}</div>}
          <input
            type="text"
            className="form-control"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
          <br />
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />{" "}
          <br />
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            onChange={handlePasswordChange}
            value={password}
            required
          />{" "}
          <br />
          {/* Password Strength Indicator */}
          {password && (
            <div className="mb-3">
              <div className="progress mb-2" style={{ height: "8px" }}>
                <div
                  className={`progress-bar bg-${getStrengthColor()}`}
                  style={{ width: `${(passwordStrength.score / 5) * 100}%` }}
                ></div>
              </div>
              <small className={`text-${getStrengthColor()}`}>
                Password Strength: {passwordStrength.strengthLevel}
              </small>

              {/* Password Requirements Feedback */}
              {passwordStrength.feedback.length > 0 && (
                <div className="mt-2">
                  <small className="text-muted">Requirements:</small>
                  <ul className="list-unstyled mb-0">
                    {passwordStrength.feedback.map((item, index) => (
                      <li key={index} className="text-danger">
                        <small>• {item}</small>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
          <input
            type="phone"
            className="form-control"
            placeholder="Enter Your Phone number"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
          />{" "}
          <br />
          <button
            className="btn btn-primary"
            type="submit"
            disabled={passwordStrength.score < 3 && password.length > 0}
          >
            Signup
          </button>
        </form>
        <p>
          Already have an account? <Link to="/signin page">Signin</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
