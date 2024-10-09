// Elementele din header
const bellIcon = document.querySelector(".bellIcon span");

// Arată sau ascunde notificările la click pe iconița de clopoțel
bellIcon.addEventListener("click", function () {
  const notificationList = document.querySelector(".notifications ul");
  if (notificationList.style.display === "none" || !notificationList.style.display) {
    notificationList.style.display = "block";
  } else {
    notificationList.style.display = "none";
  }
});

// Sistem de like-uri pentru postări
const likeButtons = document.querySelectorAll(".reaction i.bi-hand-thumbs-up-fill");
likeButtons.forEach((likeButton) => {
  likeButton.addEventListener("click", function () {
    const likesInfo = this.closest(".reactActions").querySelector(".likesInfo span");
    let likesCount = parseInt(likesInfo.textContent);
    if (this.classList.contains("liked")) {
      likesCount--;
      this.classList.remove("liked");
    } else {
      likesCount++;
      this.classList.add("liked");
    }
    likesInfo.textContent = `${likesCount} likes`;
  });
});

// Sistem de comentarii
const commentInput = document.querySelector(".newCommentField");
const insertCommentButton = document.querySelector(".insertCommentButton");
const userComments = document.querySelector(".userComments");

insertCommentButton.addEventListener("click", function () {
  if (commentInput.value.trim() !== "") {
    addComment(commentInput.value);
    commentInput.value = "";
  }
});

commentInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && commentInput.value.trim() !== "") {
    addComment(commentInput.value);
    commentInput.value = "";
  }
});

function addComment(commentText) {
  const newComment = document.createElement("div");
  newComment.classList.add("commentContent");
  newComment.innerHTML = `
    <div class="profileUserComment">
        <a href=""><img src="assets/profile-pic.jpg" alt="user profile" class="profileImage"></a>
        <span>New User</span>
    </div>
    <div class="userCommentText">
        <span>${commentText}</span>
        <div class="emojiReaction">😊</div>
        <strong class="removeCommentButton">Remove this comment</strong>
    </div>
    <div class="commentReaction">
        <strong class="commentReactionButton">Like</strong>
        <strong class="commentReactionButton">Dislike</strong>
        <strong class="commentReactionButton">Comment</strong>
    </div>
  `;
  userComments.insertAdjacentElement("afterbegin", newComment);
  addRemoveCommentListeners();
}

// Funcția pentru a șterge comentarii
function addRemoveCommentListeners() {
  const removeButtons = document.querySelectorAll(".removeCommentButton");
  removeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      this.closest(".commentContent").remove();
    });
  });
}

// Pop-up info pe imagine
const infoIcons = document.querySelectorAll(".infoIcon");
infoIcons.forEach((icon) => {
  icon.addEventListener("mouseover", function () {
    const infoMessage = document.createElement("div");
    infoMessage.classList.add("infoMessage");
    infoMessage.textContent = "This is additional info about the post.";
    this.parentElement.appendChild(infoMessage);
    setTimeout(() => {
      infoMessage.remove();
    }, 3000);
  });
});