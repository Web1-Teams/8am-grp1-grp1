import './New-Post.css';
import React from "react";
import UserInfo from "./User-Info";
import PostInput from "./Post-Input";
import PostInputLink from "./Post-Input-Link";


const NewPost = () => {
  return (
    <div className="new-Post">
      <UserInfo />
      <div className="post-input">
        <PostInput />
        <PostInputLink />
      </div>
    </div>
  );
};

export default NewPost;