document.addEventListener('DOMContentLoaded', () => {
    // Referințe la elementele DOM
    const tabs = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const likeButtons = document.querySelectorAll('.reactActions .reaction');
    const commentButtons = document.querySelectorAll('.commentReactionButton');
    const commentFields = document.querySelectorAll('.newCommentField');
    const insertCommentButtons = document.querySelectorAll('.insertCommentButton');

    // 1. Schimbarea taburilor
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Dezactivează toate taburile și conținuturile
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Activează tabul și conținutul corespunzător
            tab.classList.add('active');
            tabContents[index].classList.add('active');
        });
    });

    // 2. Reacții la postări (Like, Comment, Share)
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const action = button.querySelector('span').textContent;
            if (action === 'Like') {
                button.querySelector('span').textContent = 'Liked';
                button.querySelector('i').classList.add('liked'); // Schimbă culoarea iconiței
            } else if (action === 'Liked') {
                button.querySelector('span').textContent = 'Like';
                button.querySelector('i').classList.remove('liked');
            }
        });
    });

    // 3. Adăugarea de comentarii noi
    insertCommentButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const commentText = commentFields[index].value.trim();
            if (commentText !== "") {
                addNewComment(commentText, index);
                commentFields[index].value = ''; // Resetează câmpul de comentariu după adăugare
            }
        });
    });

    // Funcție pentru a adăuga un comentariu nou în secțiunea de comentarii
    function addNewComment(commentText, postIndex) {
        const commentSection = document.querySelectorAll('.userComments')[postIndex];

        const newComment = `
            <div class="commentContent">
                <div class="profileUserComment">
                    <a href=""><img src="assets/profile-pic.jpg" alt="user profile" class="profileImage"></a>
                    <span>Alin Dumitrache</span>
                </div>
                <div class="userCommentText">
                    ${commentText}
                    <div class="emijoReaction">👍</div>
                </div>
                <div class="commentReaction">
                    <strong class="commentReactionButton">Like</strong>
                    <strong class="commentReactionButton">Dislike</strong>
                    <strong class="commentReactionButton">Comment</strong>
                </div>
            </div>
        `;

        commentSection.insertAdjacentHTML('beforeend', newComment);
    }

    // 4. Reacții la comentarii (Like, Dislike)
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('commentReactionButton')) {
            const reactionType = e.target.textContent;
            if (reactionType === 'Like') {
                e.target.textContent = 'Liked';
            } else if (reactionType === 'Liked') {
                e.target.textContent = 'Like';
            } else if (reactionType === 'Dislike') {
                e.target.textContent = 'Disliked';
            } else if (reactionType === 'Disliked') {
                e.target.textContent = 'Dislike';
            }
        }
    });
});