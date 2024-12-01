import { Link } from "react-router-dom";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EventIcon from "@mui/icons-material/Event";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import styles from "./RightSide.module.scss";

import profilePic1 from "../../../assets/profile1.jpg";
import profilePic2 from "../../../assets/profile2.jpg";
import profilePic3 from "../../../assets/profile3.jpg";

const RightSide = () => {
  return (
    <div className={styles.rightSidebar}>
      {/* Notifications Section */}
      <div className={styles.notifications}>
        <h4 className={styles.sectionTitle}>
          <NotificationsActiveIcon /> Notifications
        </h4>
        <ul className={styles.notificationList}>
          <li>Flight FC123 is scheduled for tomorrow at 8:00 AM.</li>
          <li>Your saved article “Top Aviation Trends” has new updates.</li>
          <li>New message from Jane Doe.</li>
        </ul>
      </div>

      {/* Friend Suggestions */}
      <div className={styles.friendSuggestions}>
        <h4 className={styles.sectionTitle}>
          <PersonAddIcon /> People You May Know
        </h4>
        <div className={styles.friendList}>
          <div className={styles.friendCard}>
            <img src={profilePic1} alt="Profile" className={styles.friendImage} />
            <p className={styles.friendName}>Sarah Collins</p>
            <button className={styles.addFriendBtn}>Add Friend</button>
          </div>
          <div className={styles.friendCard}>
            <img src={profilePic2} alt="Profile" className={styles.friendImage} />
            <p className={styles.friendName}>Michael Reed</p>
            <button className={styles.addFriendBtn}>Add Friend</button>
          </div>
          <div className={styles.friendCard}>
            <img src={profilePic3} alt="Profile" className={styles.friendImage} />
            <p className={styles.friendName}>Anna Baker</p>
            <button className={styles.addFriendBtn}>Add Friend</button>
          </div>
        </div>
      </div>

      {/* Trending Topics Section */}
      <div className={styles.trendingTopics}>
        <h4 className={styles.sectionTitle}>
          <TrendingUpIcon /> Trending Topics
        </h4>
        <ul className={styles.topicList}>
          <li><Link to="/topic/aviation-safety">Aviation Safety in 2024</Link></li>
          <li><Link to="/topic/green-air-travel">The Rise of Green Air Travel</Link></li>
          <li><Link to="/topic/air-traffic-control">Future of Air Traffic Control</Link></li>
        </ul>
      </div>

      {/* Events Section */}
      <div className={styles.upcomingEvents}>
        <h4 className={styles.sectionTitle}>
          <EventIcon /> Upcoming Events
        </h4>
        <ul className={styles.eventList}>
          <li>
            <strong>Airline Expo 2024</strong> - March 15, 2024
          </li>
          <li>
            <strong>Aviation Summit</strong> - April 22, 2024
          </li>
          <li>
            <strong>Green Skies Conference</strong> - June 10, 2024
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSide;