import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.errorContent}>
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>
          It seems you've hit some turbulence. The page you're looking for might
          have been removed, renamed, or is temporarily unavailable.
        </p>
        <Link to="/" className={styles.homeLink}>
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;