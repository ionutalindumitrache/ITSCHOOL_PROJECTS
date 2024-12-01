import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import InfoIcon from "@mui/icons-material/Info";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ReplyIcon from "@mui/icons-material/Reply";
import CommentIcon from "@mui/icons-material/Comment";

import styles from "./NewsFeed.module.scss";

import profile from "../../../assets/profile.png";
import post1 from "../../../assets/post1.png";
import post2 from "../../../assets/post2.png";
import CommentSection from "./comments/CommentSection";

const NewsFeed = ({ postData }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 100));
  const [isShared, setIsShared] = useState(false);
  const [shares, setShares] = useState(Math.floor(Math.random() * 100));
  const postImages = {
    0: post1,
    1: post2,
  };

  const handleLike = () => {
    if (!isLiked) {
      setLikes((prevState) => prevState + 1);
    } else {
      setLikes((prevState) => prevState - 1);
    }
    setIsLiked((prevState) => !prevState);
  };

  const handleShare = () => {
    setShares((prevState) => prevState + 1);
    setIsShared((prevState) => !prevState);
  };
  return (
    <div className={styles.mainPost}>
      <div className={styles.userInfo}>
        <Link to="/me">
          <img
            src={profile}
            alt="Profile picture"
            className={styles.profilePictureImg}
          />
        </Link>
        <Link to="/me">User {postData.id}</Link>

        <div className={styles.contextMenu}>
          <MoreHorizIcon />
        </div>
      </div>

      <section className={styles.content}>
        <p>{postData.title}</p>
        <div className={styles.imageWrapper}>
          <img
            src={postImages[postData.id % 2]}
            alt="post content"
            className={styles.mainPostImage}
          />
          <div className={styles.infoIcon}>
            <InfoIcon fontSize="large" color="primary" />
          </div>
        </div>

        <p>{postData.body}</p>
      </section>

      <section className={styles.reacts}>
        <div className={styles.reactsNumber}>
          <ThumbUpIcon />
          <span className={styles.reactsCount}>{likes}</span>
        </div>

        <div className={styles.reactsNumber}>
          <ReplyIcon />
          <span className={styles.reactsCount}>{shares}</span>
        </div>
      </section>

      <section className={styles.reactsActions}>
        <div
          className={`${styles.reaction} ${isLiked && styles.blue}`}
          onClick={handleLike}
        >
          <ThumbUpIcon />
          <span>Like</span>
        </div>

        <div className={styles.reaction}>
          <CommentIcon />
          <span>Comment</span>
        </div>

        <div
          className={`${styles.reaction} ${isShared && styles.blue}`}
          onClick={handleShare}
        >
          <ReplyIcon />
          <span>Share</span>
        </div>
      </section>

      <section className={styles.commentContainer}>
        <CommentSection />
      </section>
    </div>
  );
};

NewsFeed.propTypes = {
  postData: PropTypes.object.isRequired,
};

export default NewsFeed;
