import React from "react";
import styles from "./CommentForm.module.scss";
import Button from "../Button/Button";

const CommentForm = () => {
  return (
    <div className={styles.formContainer}>
      <h2>Leave a Comment</h2>
      <form>
        <textarea placeholder="Your Comment"></textarea>
        <Button size="small">Post</Button>
      </form>
    </div>
  );
};

export default CommentForm;
