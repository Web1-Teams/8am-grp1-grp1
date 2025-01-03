import React, { useState } from "react";
import "./Post-Input.css";
import ButtonPublish from "./Button-Publish"



const PostInput = ({ onAddPost ,name}) => {
    const [text, setText] = useState("");
    const [posts, setPosts] = useState([]);
    const TextChange = (event)=>{//هذا الفنكشن بغير محتوى النص 
        setText(event.target.value);
    }
    const handlePublish = () => {
      if (text.trim()) {
        const newPost = {
          key: text, // معرف فريد لكل منشور
          name:name,
          text: text,
          imgu: "assert/vector-flat-illustration-grayscale-avatar-600nw-2281862025.webp",
          
        };
        onAddPost(newPost); // إضافة المنشور إلى القائمة
        setText(""); // مسح مربع النص
      }
    };

  return (
    <div className="textarea-container">
      <textarea
        id="postTextarea"
        rows="3"
        placeholder="write new post......"
        value={text}// عشان اذا كتب على مربع النص يتم الاحتفاظ به في  (onChange)لربط مربع النص بال
        onChange={TextChange}//لما يصير تغيير على النص يبعتني على هذا الفنكشن
      ></textarea>
      {text.trim() &&<ButtonPublish onClick={handlePublish}/>}
    </div>
  );
};

export default PostInput;
