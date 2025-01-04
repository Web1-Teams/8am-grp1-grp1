import react from "react";
import './Page.css';
import Navbar from "../navbar/Navbar";
import Contenar from "../contenar/Contenar";
import MainContenar from "../mainContenar/Main-contenar";
import Username from "../username/Username";
import React  from "react";
import Post from "../post/Post";
import BottomNav from "../bottom-nav/Bottom-nav";
import RightSide from "../rightSide/Right-side";
import LeftSide from "../leftSide/Left-side";
import NewPost from "../newPost/New-Post";
import PostInput from "../postInput/Post-Input";
import  { useState }  from "react";
import QuestionButtons from "../questionButtons/Question-buttons";

 const Page = ({ posts, onDelete ,onAddPost} ) => {




     return(
        
        <>
            <Navbar/>
            <Contenar>
            <LeftSide>
                    <li><QuestionButtons title="HTML" url="https://www.w3schools.com/quiztest/quiztest.asp?qtest=HTML" /></li>
                    <li><QuestionButtons title="CSS" url="https://www.w3schools.com/quiztest/quiztest.asp?qtest=CSS" /></li>
                    <li><QuestionButtons title="JavaScript"  url="https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS"/></li>
                    <li><QuestionButtons title="SQL"  url="https://www.w3schools.com/quiztest/quiztest.asp?qtest=SQL"/></li>
                    <li><QuestionButtons title="Python"  url="https://www.w3schools.com/quiztest/quiztest.asp?qtest=PYTHON"/></li>
                    <li><QuestionButtons title="Java"  url="https://www.w3schools.com/quiztest/quiztest.asp?qtest=JAVA"/></li>
                    <li><QuestionButtons title="C"  url="https://www.w3schools.com/c/c_quiz.php"/></li>
                    <li><QuestionButtons title="C++"  url="https://www.w3schools.com/cpp/cpp_quiz.asp"/></li>
                    <li><QuestionButtons title="C#"  url="https://www.w3schools.com/cs/cs_quiz.php"/></li>
                    <li><QuestionButtons title="React"  url="https://www.w3schools.com/react/react_quiz.asp"/></li>
                    <li><QuestionButtons title="MySQL"  url="https://www.w3schools.com/mysql/mysql_quiz.asp"/></li>
                    </LeftSide>
                <MainContenar>


                    <Username name="amal" />
                   < NewPost onAddPost={onAddPost} name={"amal"} />

                    {posts.slice().reverse().map((post) => (
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



