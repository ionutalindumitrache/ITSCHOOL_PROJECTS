import { useParams } from "react-router-dom";
import React, { useState } from 'react';
import styles from './Profile.module.scss';

const Profile = () => {
    const userData = {
        name: "Alin Dumitrache",
        bio: "Software Developer with a passion for building intuitive and efficient applications. Coding enthusiast, tech explorer, and coffee lover.",
        rating: 4.8,
        likes: 254,
        friends: [
            { id: 1, name: "John Doe", profileImage: "http://dummyimage.com/100x100.png/dddddd/000000" },
            { id: 2, name: "Jane Smith", profileImage: "http://dummyimage.com/100x100.png/5fa2dd/ffffff" },
            { id: 3, name: "Samuel Green", profileImage: "http://dummyimage.com/100x100.png/ff4444/ffffff" },
            { id: 4, name: "Emily White", profileImage: "http://dummyimage.com/100x100.png/cccccc/000000" },
            { id: 5, name: "Michael Brown", profileImage: "http://dummyimage.com/100x100.png/aaaaaa/ffffff" }
        ],
        gallery: [
            "http://dummyimage.com/150x150.png/dddddd/000000",
            "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
            "http://dummyimage.com/150x150.png/ff4444/ffffff"
        ]
    };

    const [isFollowing, setIsFollowing] = useState(false);
    const [likes, setLikes] = useState(userData.likes);

    const toggleFollow = () => setIsFollowing(!isFollowing);
    const handleLike = () => setLikes(likes + 1);

    return (
        <div className={styles.profileContainer}>
            {/* Cover Photo */}
            <div className={styles.coverPhoto}></div>

            {/* Profile Header */}
            <div className={styles.profileHeader}>
                <img className={styles.profileImage} src="http://dummyimage.com/150x150.png/5fa2dd/ffffff" alt="Profile" />
                <h1 className={styles.name}>{userData.name}</h1>
                <p className={styles.bio}>{userData.bio}</p>
                
                {/* Follow and Like Actions */}
                <div className={styles.actionButtons}>
                    <button onClick={toggleFollow} className={styles.followButton}>
                        {isFollowing ? "Following" : "Follow"}
                    </button>
                    <button onClick={handleLike} className={styles.likeButton}>
                        ❤️ {likes} Likes
                    </button>
                </div>
            </div>

            {/* Stats Section */}
            <div className={styles.statsSection}>
                <div className={styles.stat}>
                    <span className={styles.statNumber}>{userData.rating}</span>
                    <span className={styles.statLabel}>Rating</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.statNumber}>{likes}</span>
                    <span className={styles.statLabel}>Likes</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.statNumber}>{userData.friends.length}</span>
                    <span className={styles.statLabel}>Friends</span>
                </div>
            </div>

            {/* Friends Section */}
            <div className={styles.friendsSection}>
                <h2 className={styles.sectionTitle}>Friends</h2>
                <div className={styles.friendsList}>
                    {userData.friends.map(friend => (
                        <div key={friend.id} className={styles.friendCard}>
                            <img src={friend.profileImage} alt={friend.name} className={styles.friendImage} />
                            <p className={styles.friendName}>{friend.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Gallery Section */}
            <div className={styles.gallerySection}>
                <h2 className={styles.sectionTitle}>Photo Gallery</h2>
                <div className={styles.gallery}>
                    {userData.gallery.map((photo, index) => (
                        <img key={index} src={photo} alt="Gallery" className={styles.galleryImage} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;