import React from "react";
import { PostType } from "../model/Post";
import styles from "./Post.module.scss";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Button from "../../../widgets/Button/Button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ContentBlock from "../../../shared/ui/ContentBlock/ContentBlock";

interface Props {
  post: PostType;
}

const Post: React.FC<Props> = ({ post }) => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  if (post.content.length > 320) {
    post.content = post.content.slice(0, 320) + "...";
  }

  const redirectToPostPage = () => {
    navigate(`/post/${post.id}`);
  };

  return (
   <ContentBlock>
      <div className={styles.authorContainer}>
        <img src={post.authorAvatar} alt="avatar" />
        <a href={`/profile/${post.authorId}`}> {post.authorName}</a>
        <p className={styles.views}>
          <RemoveRedEyeIcon className={styles.eye} /> {post.views}
        </p>
      </div>
      <NavLink className={styles.title} to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
      </NavLink>
      <p>{post.content}</p>
      {post.postImg && (
        <div className={styles.imgContainer}>
          <img src={post.postImg} alt="post-img" className={styles.postImg} />
        </div>
      )}
      <p className={styles.createdAt}>{post.created_at}</p>
      <Button size="small" onClick={redirectToPostPage}>
        {t("ReadBtn")}
      </Button>
  
    </ContentBlock>
  );
};

export default Post;
