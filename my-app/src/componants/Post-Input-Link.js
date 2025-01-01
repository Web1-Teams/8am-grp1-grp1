import React from "react";
import "./Post-Input-Link.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
const PostInputLink = () => {
  return (
    <div className="post-input-link">
      <span className="link-video">
        <a href="#">
        <FontAwesomeIcon  className="i1" icon={faVideo} /> Live video
        </a>
      </span>
      <span className="link-camera">
        <a href="#">
        <FontAwesomeIcon className="i2"  icon={faCamera} /> Photo/Video
        </a>
      </span>
      <span className="link-smile">
        <a href="#">
        <FontAwesomeIcon className="i3" icon={faSmile} /> Feeling
        </a>
      </span>
    </div>
  );
};

export default PostInputLink;