import React, { useState } from "react";
import styles from "./app.module.css";
import { Helmet } from "react-helmet";

const initialPosts = [
  {
    id: 2,
    text: "Lorem ipsum",
    user: {
      avatar: "/uploads/avatar1.png",
      username: "Test User",
    },
  },
  {
    id: 1,
    text: "Lorem ipsum",
    user: {
      avatar: "/uploads/avatar2.png",
      username: "Test User 2",
    },
  },
];

const App = (props) => {
  const [posts, setPosts] = useState(initialPosts);

  const [postContent, setPostContent] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setPosts((prevpost) => {
      let newarr = [  
        {
          id: prevpost[0].id + 1,
          text: postContent,
          user: {
            avatar: "/uploads/avatar1.png",
            username: "Merabalarrrr",
          },
        },
        ...prevpost,
      ];
      setPostContent("");
      return newarr;
    });
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["feed"]}>
        <Helmet>
          <title>Graphbook - Feed</title>
          <meta
            name="description"
            content="Newsfeed of all your friends on Graphbook"
          />
        </Helmet>
        <div className={styles["postForm"]}>
          <form onSubmit={handleSubmit}>
            <textarea
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              placeholder="Write your custom post!"
            />
            <input type="submit" value="Submit" />
          </form>
        </div>

        {posts.map((post, i) => (
          <div key={post.id} className={styles["post"]}>
            <div className={styles["header"]}>
              <img src={post.user.avatar} />
              <h2>{post.user.username}</h2>
            </div>
            <p className={styles["content"]}>{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
