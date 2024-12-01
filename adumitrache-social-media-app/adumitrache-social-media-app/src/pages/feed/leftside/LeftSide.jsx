import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

import styles from "./LeftSide.module.scss";
import profilePic from "../../../assets/profile.png";

const LeftSide = () => {
  return (
    <div className={styles.leftSidebar}>
      {/* User Profile Section */}
      <div className={styles.userProfile}>
        <img src={profilePic} alt="User Profile" className={styles.profileImage} />
        <div className={styles.userInfo}>
          <h3 className={styles.userName}>Alin Dumitrache</h3>
          <Link to="/settings" className={styles.settingsLink}>
            <SettingsIcon /> Profile Settings
          </Link>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className={styles.navMenu}>
        <Link to="/home" className={styles.navItem}>
          <HomeIcon className={styles.navIcon} /> Home
        </Link>
        <Link to="/newsfeed" className={styles.navItem}>
          <AccountCircleIcon className={styles.navIcon} /> Newsfeed
        </Link>
        <Link to="/notifications" className={styles.navItem}>
          <NotificationsIcon className={styles.navIcon} /> Notifications
        </Link>
        <Link to="/messages" className={styles.navItem}>
          <MessageIcon className={styles.navIcon} /> Messages
        </Link>
      </nav>

      {/* Shortcuts */}
      <div className={styles.shortcuts}>
        <h4 className={styles.sectionTitle}>Quick Links</h4>
        <Link to="/saved" className={styles.shortcutItem}>
          <BookmarkIcon className={styles.shortcutIcon} /> Saved Articles
        </Link>
        <Link to="/trending" className={styles.shortcutItem}>
          <HomeIcon className={styles.shortcutIcon} /> Trending Aviation News
        </Link>
      </div>

      {/* Logout */}
      <div className={styles.logoutSection}>
        <Link to="/logout" className={styles.logoutLink}>
          <LogoutIcon className={styles.logoutIcon} /> Logout
        </Link>
      </div>
    </div>
  );
};

export default LeftSide;