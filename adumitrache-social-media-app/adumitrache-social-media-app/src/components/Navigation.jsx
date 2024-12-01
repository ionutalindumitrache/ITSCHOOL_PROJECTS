import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/selectors";
import { toggleLogin } from "../redux/slices/authSlice";
import { FaPlane, FaUserCircle } from "react-icons/fa"; // Import aviation and profile icons

const Navigation = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = user.isAuthenticated;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleAuth = () => {
    dispatch(toggleLogin());
    isLoggedIn ? navigate("/auth") : navigate("/");
  };

  // Toggle dropdown for profile menu
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  // Handle scroll event for changing header background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <Link to="/" className={styles.logoContainer}>
        <FaPlane className={styles.logoIcon} />
        <div className={styles.logo}>Forbes Avia</div>
      </Link>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
        <ul className={styles.menu}>
          {isLoggedIn && (
            <>
              <li className={styles.menuItem} onClick={toggleDropdown}>
                <span>
                  My Profile <FaUserCircle />
                </span>
                {isDropdownOpen && (
                  <ul className={styles.dropdownMenu}>
                    <li><NavLink to="/profile">View Profile</NavLink></li>
                    <li><NavLink to="/settings">Settings</NavLink></li>
                    <li onClick={toggleAuth}>Logout</li>
                  </ul>
                )}
              </li>
              <li className={styles.menuItem}>
                <NavLink to="/friends">Friends</NavLink>
              </li>
            </>
          )}
          <li className={styles.menuItem} onClick={toggleAuth}>
            <NavLink to="/auth">{isLoggedIn ? "Logout" : "Login"}</NavLink>
          </li>
          {isLoggedIn && <li className={styles.userEmail}>{user.email}</li>}
        </ul>
      </nav>

      <button className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </button>
    </header>
  );
};

export default Navigation;

