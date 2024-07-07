import React from "react";
import { useParams } from "react-router-dom";
import styles from "./PostPage.module.scss";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const PostPage = () => {
  const { id } = useParams();

  return (
    <div className={styles.postContainer}>
      <h1>ID IS: {id}</h1>
      <div className={styles.authorContainer}>
        <img src={post.authorAvatar} alt="avatar" />
        <a href={`/profile/${post.authorId}`}> {post.authorName}</a>
        <p className={styles.views}>
          <RemoveRedEyeIcon className={styles.eye} /> {post.views}
        </p>
      </div>

      <h2>{post.title}</h2>

      <p>{post.content}</p>
      {post.postImg && (
        <div className={styles.imgContainer}>
          <img src={post.postImg} alt="post-img" className={styles.postImg} />
        </div>
      )}
      <p className={styles.createdAt}>{post.created_at}</p>
    </div>
  );
};

export default PostPage;

const post = {
  id: "1",
  title: "Example Post 1",
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  created_at: "2024-07-08 10:50",
  authorName: "John Doe",
  authorAvatar:
    "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
  authorId: "123",
  views: "100",
  postImg:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Hopetoun_falls.jpg/1200px-Hopetoun_falls.jpg",
};
