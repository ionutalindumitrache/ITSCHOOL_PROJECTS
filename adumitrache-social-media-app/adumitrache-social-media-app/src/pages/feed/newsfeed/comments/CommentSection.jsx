import { useState } from "react";
import styles from "./CommentSection.module.scss";

import profileImg from "../../../../assets/profile.png";
import { Link } from "react-router-dom";

const CommentSection = () => {
  const USER_DATA = [
    {
      id: 1,
      firstName: "Edwina",
      lastName: "Hatfield",
      fullName: "Edwina Hatfield",
      date: "8/2/2024",
      profileImage: "http://dummyimage.com/141x100.png/dddddd/000000",
      comment:
        "erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at",
    },
    {
      id: 2,
      firstName: "Hanson",
      lastName: "Croshaw",
      fullName: "Hanson Croshaw",
      date: "10/12/2023",
      profileImage: "http://dummyimage.com/165x100.png/dddddd/000000",
      comment:
        "rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta",
    },
    {
      id: 3,
      firstName: "Rycca",
      lastName: "Bello",
      fullName: "Rycca Bello",
      date: "18/8/2024",
      profileImage: "http://dummyimage.com/177x100.png/5fa2dd/ffffff",
      comment: "turpis enim blandit mi in porttitor pede justo eu massa",
    },
    {
      id: 4,
      firstName: "Rudolfo",
      lastName: "Pegram",
      fullName: "Rudolfo Pegram",
      date: "24/9/2024",
      profileImage: "http://dummyimage.com/145x100.png/ff4444/ffffff",
      comment:
        "dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia",
    },
    {
      id: 5,
      firstName: "Jody",
      lastName: "Buttriss",
      fullName: "Jody Buttriss",
      date: "20/11/2023",
      profileImage: "http://dummyimage.com/230x100.png/cc0000/ffffff",
      comment:
        "duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa",
    },
    {
      id: 6,
      firstName: "Steffen",
      lastName: "Judkin",
      fullName: "Steffen Judkin",
      date: "19/8/2024",
      profileImage: "http://dummyimage.com/223x100.png/cc0000/ffffff",
      comment:
        "pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in",
    },
    {
      id: 7,
      firstName: "Floria",
      lastName: "Crathorne",
      fullName: "Floria Crathorne",
      date: "3/10/2024",
      profileImage: "http://dummyimage.com/246x100.png/cc0000/ffffff",
      comment:
        "et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem",
    },
    {
      id: 8,
      firstName: "Fonsie",
      lastName: "Yair",
      fullName: "Fonsie Yair",
      date: "20/6/2024",
      profileImage: "http://dummyimage.com/208x100.png/cc0000/ffffff",
      comment:
        "egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu",
    },
    {
      id: 9,
      firstName: "Nina",
      lastName: "McPhater",
      fullName: "Nina McPhater",
      date: "17/1/2024",
      profileImage: "http://dummyimage.com/235x100.png/ff4444/ffffff",
      comment:
        "a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor",
    },
    {
      id: 10,
      firstName: "Berri",
      lastName: "Courtliff",
      fullName: "Berri Courtliff",
      date: "16/7/2024",
      profileImage: "http://dummyimage.com/177x100.png/5fa2dd/ffffff",
      comment:
        "quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi",
    },
  ];

  const [newComment, setNewComment] = useState("");
  const [listOfComments, setListOfComments] = useState(USER_DATA);

  const handleSubmit = (e) => {
    e.preventDefault();

    setListOfComments( prevState => {
        const myComment = {
            id: prevState.length,
            fullName: 'Alin DUMITRACHE',
            date: 'right now',
            comment: newComment
        }

        setNewComment('')

        return [myComment, ...prevState]
    })
  };

  return (
    <div className={styles.commentsInputContainer}>
      <div className={styles.commentInputSection}>
        <img
          src={profileImg}
          alt="profile pic"
          className={styles.profilePictureImg}
        />
        <form onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            placeholder="Write a comment.."
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          />
          <button>Add comment</button>
        </form>
      </div>

      <div className={styles.postComments}>
        {listOfComments &&
          listOfComments.map((comment, idx) => {
            return (
              <div className={styles.comments} key={idx}>
                <div className={styles.userInfo}>
                  <Link to="/">
                    <img
                      src={comment.profileImage}
                      alt="Profile pic"
                      className={styles.profilePictureImg}
                    />
                  </Link>
                  <Link to="/">
                    <span className={styles.userName}>{comment.fullName} </span>
                  </Link>
                </div>

                <div className={styles.commentInfo}>
                  <p>{comment.comment}</p>
                  <p className={styles.timeOfPost}> {comment.date} </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CommentSection;
