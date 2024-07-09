import React from "react";
import ContentBlock from "../../../shared/ui/ContentBlock/ContentBlock";
import styles from "./CreaatePotPage.module.scss";
import Button from "../../../widgets/Button/Button";

const CreatePostPage = () => {
  return (
    <div className={styles.container}>
      <ContentBlock>
      <div className={styles.authorContainer}>
          <div>
            <img src={    "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"} alt="avatar" />
            <a href={`/profile/${1}`}> {"John Doe"}</a>
          </div>
          </div>
       
        <form className={styles.form}>
          <input type="text" className={styles.titleInput} placeholder="Title"/>
          <textarea  className={styles.textArea} name="" id="" placeholder="Content"></textarea>
        </form>
        <Button >Post</Button>
      </ContentBlock>
  
    </div>
  );
};

export default CreatePostPage;
