import React from "react";
import Post from "../../entities/Post/ui/Post";
import { PostType } from "../../entities/Post/model/Post";
import styles from "./ProfileContainer.module.scss";

const ProfileContainer = () => {
  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return (
          <div className={styles.postItem}>
            <Post key={post.id} post={post} />
          </div>
        );
      })}
    </div>
  );
};

export default ProfileContainer;

const posts: PostType[] = [
  {
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
    postImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Hopetoun_falls.jpg/1200px-Hopetoun_falls.jpg"
  },
  {
    id: "2",
    title: "Another Post",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    created_at: "2024-07-09 08:30",
    authorName: "Jane Smith",
    authorAvatar:
      "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-female-avatar-user-profile-avatar-vector-illustration-on-white-background-image_5810315.png",
    authorId: "456",
    views: "50",
    postImg:"https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg"
  },
  {
    id: "3",
    title: "A Third Post",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
    created_at: "2024-07-10 15:20",
    authorName: "David Brown",
    authorAvatar:
      "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-blue-tie-png-image_5809522.png",
    authorId: "789",
    views: "80",
    postImg:null,
  },
];
