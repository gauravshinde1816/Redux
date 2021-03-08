import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { fetchposts } from "../actions/postActions";
const Post = (props) => {
  useEffect(() => {
    props.fetchposts();
    if (props.newpost > 0) {
      props.posts.unshift(props.newpost);
    }
  }, [props.newpost]);
  return (
    <div>
      <h1>Posts</h1>

      {props.posts.length > 0 &&
        props.posts.map(({ id, body, title }) => {
          return (
            <div key={id}>
              <strong>{title}</strong>
              <p>{body}</p>
              <hr />
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newpost: state.posts.item,
});

export default connect(mapStateToProps, { fetchposts })(Post);
