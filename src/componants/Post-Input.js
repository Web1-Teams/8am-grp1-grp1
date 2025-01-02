import React, { useState } from "react";
import "./Post-Input.css";
import ButtonPublish from "./Button-Publish"



const PostInput = () => {
    const [text, setText] = useState("");
    const TextChange = (event)=>{//هذا الفنكشن بغير محتوى النص 
        setText(event.target.value);
    }
  return (
    <div className="textarea-container">
      <textarea
        id="postTextarea"
        rows="3"
        placeholder="write new post......"
        value={text}// عشان اذا كتب على مربع النص يتم الاحتفاظ به في  (onChange)لربط مربع النص بال
        onChange={TextChange}//لما يصير تغيير على النص يبعتني على هذا الفنكشن
      ></textarea>
      {text.trim() &&<ButtonPublish/>}
    </div>
  );
};

export default PostInput;
