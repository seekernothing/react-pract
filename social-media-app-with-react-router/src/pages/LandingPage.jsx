import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./Landingpage.css";

const LandingPage = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [post, setPost] = useState([]);

const handelPost = () => {
  if (title.trim() && author.trim() && content.trim()) {
    setPost([...post, { title, author, content }]);
  }

  setTitle("");
  setAuthor("");
  setContent("");
};

  return (
    <div>
      <h2 className="h2">Add a new Post</h2>

      <div className="inputdiv">
        {/* for input */}
        <label>Post Title:</label>
        <input
          className="inp"
          type="text"
          placeholder="What's on your mind"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Author:</label>
        <input
          className="inp"
          type="text"
          placeholder="author name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <label>Content:</label>

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="5"
        />

        <button onClick={() => handelPost()}>Share Post</button>
      </div>

      <div>
        {/* to display posts */}
        {post.map((p, idx) => (
          <div className="postdiv" key={idx}>
            <b>
              {" "}
              <h3>{p.title}</h3>
            </b>
            <h6>{p.author}</h6>
            <p>{p.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
