import React, { useState } from "react";
import styles from "./Settings.module.scss";
import { useDispatch } from "react-redux";
import { toggleLogin } from "../..//redux/slices/authSlice";
import { FaBell, FaLock, FaUserEdit, FaSignOutAlt } from "react-icons/fa"; 

const Settings = () => {
  const dispatch = useDispatch();
  const [profileSettings, setProfileSettings] = useState({
    name: "Alin Dumitrache",
    email: "alin.dumitrache@example.com",
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: false,
  });

  const handleLogout = () => dispatch(toggleLogin());

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileSettings({ ...profileSettings, [name]: value });
  };

  const handleNotificationToggle = (type) => {
    setNotifications({
      ...notifications,
      [type]: !notifications[type],
    });
  };

  return (
    <div className={styles.settingsContainer}>
      <h1 className={styles.pageTitle}>Settings</h1>

      {/* Profile Section */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <FaUserEdit /> Profile
        </h2>
        <div className={styles.field}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={profileSettings.name}
            onChange={handleProfileChange}
          />
        </div>
        <div className={styles.field}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={profileSettings.email}
            onChange={handleProfileChange}
          />
        </div>
      </div>

      {/* Notifications Section */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <FaBell /> Notifications
        </h2>
        <div className={styles.toggleContainer}>
          <label>Email Notifications</label>
          <input
            type="checkbox"
            checked={notifications.emailNotifications}
            onChange={() => handleNotificationToggle("emailNotifications")}
          />
        </div>
        <div className={styles.toggleContainer}>
          <label>Push Notifications</label>
          <input
            type="checkbox"
            checked={notifications.pushNotifications}
            onChange={() => handleNotificationToggle("pushNotifications")}
          />
        </div>
      </div>

      {/* Privacy Section */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <FaLock /> Privacy
        </h2>
        <div className={styles.field}>
          <label>Password</label>
          <input type="password" placeholder="Enter new password" />
        </div>
        <button className={styles.saveButton}>Update Password</button>
      </div>

      {/* Logout Button */}
      <div className={styles.logoutSection}>
        <button className={styles.logoutButton} onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
};

export default Settings;