import './New-Post.css';
import React from "react";

import PostInput from "../postInput/Post-Input";
import PostInputLink from "../postInputLink/Post-Input-Link";
import Username from "../username/Username";
import { width } from '@fortawesome/free-brands-svg-icons/faAdversal';

const NewPost = ({onAddPost,name}) => {

  return (
    <div className="new-Post">
      <Username name={name}  />
      <div className="post-input">
        <PostInput onAddPost={onAddPost} name={name} />
        <PostInputLink />
      </div>
    </div>
  );
};

export default NewPost;