import { useEffect, useState, useRef, useCallback } from "react";
import useFetch from "../../hooks/useFetch";
import styles from "./Feed.module.scss";
import LeftSide from "./leftside/LeftSide";
import NewsFeed from "./newsfeed/Newsfeed";
import RightSide from "./rightside/RightSide";
import postService from "../../services/postService";
import LoadingSpinner from "../feed/LoadingSpinner"; // Loading spinner
import ErrorMessage from "../feed/ErrorMessage"; // Error message

const Feed = () => {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const feedEndRef = useRef(null);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await postService.get(page); // Adjust
      setPostList((prevPosts) => [...prevPosts, ...response]);
    } catch (error) {
      setError("Failed to load posts. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const loadMorePosts = () => setPage((prevPage) => prevPage + 1);

  useEffect(() => {
    if (!loading && feedEndRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) loadMorePosts();
        },
        { threshold: 1.0 }
      );
      observer.observe(feedEndRef.current);
      return () => observer.disconnect();
    }
  }, [loading]);

  return (
    <div className={styles.mainContainer}>
      <aside className={`${styles.leftSide} ${styles.aside}`}>
        <LeftSide />
      </aside>
      <section className={styles.newsfeed}>
        {error && <ErrorMessage message={error} />}
        {postList && postList.length > 0 ? (
          postList.map((post) => (
            <NewsFeed postData={post} key={post.id} />
          ))
        ) : (
          <p>No posts available.</p>
        )}
        {loading && <LoadingSpinner />}
        <div ref={feedEndRef} className={styles.feedEnd} />
      </section>
      <aside className={`${styles.rightSide} ${styles.aside}`}>
        <RightSide />
      </aside>
    </div>
  );
};

export default Feed;
