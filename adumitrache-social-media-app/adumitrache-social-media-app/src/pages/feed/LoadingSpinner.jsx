import styles from "./LoadingSpinner.module.scss";

const LoadingSpinner = () => (
  <div className={styles.spinner}>
    <div className={styles.doubleBounce1}></div>
    <div className={styles.doubleBounce2}></div>
  </div>
);

export default LoadingSpinner;