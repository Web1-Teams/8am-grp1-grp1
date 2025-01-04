  import './Post.css';
import { useState } from 'react';


const Post = (props) => {

        const [like, setLike] = useState(false);

        const Likepost = (event) => {
            setLike(!like);
        };

    const imguu = (props.imgu) ? props.imgu : "assert/vector-flat-illustration-grayscale-avatar-600nw-2281862025.webp"

    return (
        <div className="posting">
            <div className="head-post">
                <img src={imguu} height="70"
                     width="70"/>
                <p className="name">{props.name}</p>
                <i className="fa-regular fa-circle-xmark" onClick={props.onDelete} ></i>
            </div>

            <p className="post">
                {props.text}
                <br/>
                <a href={props.link}>{props.link}</a>
            </p>

            <img src={props.imgp} className="post-img"/>
            <hr/>
            <div className="like-comment-share">
                <div className="icons">
                    <div><i className="fa-solid fa-thumbs-up" style={{ color: like ? "mediumblue" : "#626262" }}  onClick={Likepost} title="like"></i></div>
                    <div><i className="fa-solid fa-comments" title="comment"></i></div>
                    <div><i className="fa-solid fa-share" title="share"></i></div>
                </div>
            </div>
        </div>
    )


};

   export default Post;