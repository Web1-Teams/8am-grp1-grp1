import {useState} from "react";
import Page from "../components/page/Page";



const Profile = () => {

    const [posts, setPosts] = useState([
        {
            name: "jops",
            imgu: "assert/vector-flat-illustration-grayscale-avatar-600nw-2281862025.webp",
            imgp: "",
            link: "",
            text:" 🎯 Goals and Aspirations for me:                                                                                                                          1.To become a leading AI expert and develop solutions that push the boundaries of technology. 2.To work on projects that have a meaningful impact, such as AI for healthcare or education 3.To continuously grow in my field by taking on challenging projects and learning from industry leaders. "
        },
        {
            name: "jops",
            imgu: "assert/vector-flat-illustration-grayscale-avatar-600nw-2281862025.webp",
            imgp: "",
            link: "",
            text:" 🌟 Personal Skills for me:                                                                                                                         1. Strong problem-solving and analytical thinking abilities. 2.Excellent teamwork and leadership skills, with a collaborative approach to problem-solving. 3.Highly adaptable to fast-paced, innovative environments. "
        },
        {
            name: "jops",
            imgu: "assert/vector-flat-illustration-grayscale-avatar-600nw-2281862025.webp",
            imgp: "",
            link: "",
            text:" 💼 Qualifications and Experience for me:                                                                                                                          Bachelor’s degree in Computer Science from An-Najah National University.Specialized in Artificial Intelligence............Professional Experience:::1.Data Scientist Intern at Tech Innovators Inc. for 6 months, where I contributed to AI-driven projects and improved data-driven decision-making processes 2.Assisted in designing and deploying machine learning models to enhance business operations."
        },
        {
            name: "jops",
            imgu: "assert/vector-flat-illustration-grayscale-avatar-600nw-2281862025.webp",
            imgp: "",
            link: "",
            text:" 👤 Who is Amal?                                                                                                                           I am Amal, a passionate and ambitious individual dedicated to continuous learning and self-development. I have a clear vision to achieve my goals and am always striving to improve myself while helping others succeed."
        },
    ]);

    const deletePost = (text) => {
        setPosts(posts.filter(function(post) {
            return post.text !== text;
        }));

    };

    const handleNewPost = (newPost) => {
        setPosts([...posts, newPost]);
      };


    return(

            <Page posts={posts} onDelete={deletePost} onAddPost={handleNewPost} />


        )

}

export default Profile;