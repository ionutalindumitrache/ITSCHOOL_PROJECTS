import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AuthForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";
import { loginUser, registerUser } from "../../redux/slices/authSlice";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clearInputs = () => {
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setEmail("");
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const payload = isLogin
      ? { email: username, password }
      : { username, email, password };

    try {
      if (isLogin) {
        await dispatch(loginUser(payload));
        if (user.isAuthenticated) navigate("/");
      } else {
        if (password === confirmPassword) {
          await dispatch(registerUser(payload));
          toggleAuthState(); // Switch to login after successful registration
        } else {
          alert("Passwords do not match!");
          return;
        }
      }
    } catch (error) {
      console.error(error);
    }
    clearInputs();
  };

  const toggleAuthState = () => setIsLogin((prevState) => !prevState);

  return (
    <div className={styles.auth}>
      <h2>{isLogin ? "Welcome Back!" : "Join Our Community"}</h2>
      <p className={styles.subtitle}>
        {isLogin
          ? "Log in to continue where you left off."
          : "Sign up to get started with exclusive features."}
      </p>
      <form onSubmit={submitHandler} autoComplete="off" noValidate>
        {!isLogin && (
          <div className={styles.control}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Choose a username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}

        <div className={styles.control}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
            value={isLogin ? username : email}
            onChange={(e) => (isLogin ? setUsername(e.target.value) : setEmail(e.target.value))}
          />
        </div>

        <div className={styles.control}>
          <label htmlFor="password">Password</label>
          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className={styles.passwordToggle}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {!isLogin && (
          <div className={styles.control}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Re-enter your password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        )}

        <div className={styles.actions}>
          {user.error && <p className={styles.error}>Please try again!</p>}
          {user.loading && <p className={styles.loading}>Processing request...</p>}
          {!user.loading && (
            <button type="submit" className={styles.submitButton}>
              {isLogin ? "Login" : "Sign Up"}
            </button>
          )}
          <button
            type="button"
            className={styles.toggle}
            onClick={toggleAuthState}
          >
            {isLogin ? "Don't have an account? Sign up" : "Already a member? Log in"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;