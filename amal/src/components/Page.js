import react from "react";
import './Page.css';
import Navbar from "./Navbar";
import Contenar from "./Contenar";
import MainContenar from "./Main-contenar";
import Username from "./Username";
import React from "react";
import Post from "./Post";
import BottomNav from "./Bottom-nav";




 const Page = ({ posts, onDelete } ) => {
     return(
        <>
            <Navbar />
            <Contenar>

                <MainContenar>


                    <Username name="amal" />
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
                  <BottomNav/>
            </Contenar>

        </>

     )


 };

 export default Page;



