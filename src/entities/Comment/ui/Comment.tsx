import React from "react";
import styles from "./Comment.module.scss";

export const Comment = () => {
  return <div className={styles.commentWrapper}>
  <div className={styles.authorContainer}>
     <div>
     <img src={comment.authorAvatar} alt="avatar" />
     <a href={`/profile/${comment.authorId}`}> {comment.authorName}</a>
     </div>
     <div>
        {comment.createdAt}
     </div>
      </div>
      <div>{comment.title}</div>
      <div>{comment.content}</div>
  </div>;
};


const comment = {
  id: "123",
  authorId: "123",
  title:"Coolest thing!",
  createdAt: "2024-07-08 10:50",
  authorName: "John Doe",
  content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  authorAvatar:"https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
}