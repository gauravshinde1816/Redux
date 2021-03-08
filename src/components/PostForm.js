import React, { useState } from "react";
// import axios from "axios";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";
const PostForm = (props) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { title, message };
    props.createPost(post);
  };
  return (
    <div className="container my-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Title: </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Message: </label>
          <textarea
            value={message}
            className="form-control"
            cols="30"
            rows="10"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-outline-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect(null, { createPost })(PostForm);
