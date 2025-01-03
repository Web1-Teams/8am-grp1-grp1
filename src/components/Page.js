import react from "react";
import './Page.css';
import Navbar from "./Navbar";
import Contenar from "./Contenar";
import MainContenar from "./Main-contenar";
import Username from "./Username";
import React from "react";
import Post from "./Post";
import BottomNav from "./Bottom-nav";
import RightSide from "./Right-side";
import LeftSide from "./Left-side";
import NewPost from "./New-Post";

 const Page = ({ posts, onDelete } ) => {
     return(
        <>
            <Navbar />
            <Contenar>
            <LeftSide/>
                <MainContenar>


                    <Username name="amal" />
                   < NewPost/>
                    {posts.map((post) => (
                        <Post
                            key={post.text}
                            name={post.name}
                            imgu={post.imgu}
                            imgp={post.imgp}
                            link={post.link}
                            text={post.text}
                            onDelete={() => onDelete(post.text)}

                        />
                    ))}


                </MainContenar>
                <RightSide/>
                  <BottomNav/>
                </Contenar>

        </>

     )


 };

 export default Page;



