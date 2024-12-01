import AuthForm from "./AuthForm";
import styles from "./AuthPage.module.scss";

const AuthPage = () => {
  return (
    <div className={styles.authPage}>
      <div className={styles.container}>
        <section className={styles.welcomeSection}>
          <h1 className={styles.title}>Welcome to Forbes Avia</h1>
          <p className={styles.subtitle}>
            Join our community and stay connected with the latest in aviation!
          </p>
        </section>
        
        <section className={styles.authFormSection}>
          <AuthForm />
        </section>
      </div>
    </div>
  );
};

export default AuthPage;