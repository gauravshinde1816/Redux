import React from "react";
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import { Provider } from "react-redux";
import store from "./store/Store";
const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <PostForm />
        <Post />
      </div>
    </Provider>
  );
};

export default App;
