import {useState} from "react";
import Page from "../components/Page";



const Hoom = () => {

    const [posts, setPosts] = useState([
        {
            name: "Ali",
            imgu: "assert/vector-flat-illustration-grayscale-avatar-600nw-2281862025.webp",
            imgp: "",
            link: "",
            text: "Guys, I am learning mastering Python and I have decided to specialize in the field of web development in Python, and I want to know whether this list is suitable for full stack web development?  \n" +
                "- python basics \n" +
                "- django framework \n" +
                "-html \n" +
                "-css \n" +
                "-Java script \n" +
                "I hope if anyone has an idea, tell me if I need anything with them\n" +
                "Note: I did a search on Google, but the problem is that all the sites talk about different things and different paths from each other, and there is no connection at all.",


        },

        {
            name: "Sana",
            imgu: "assert/vector-flat-illustration-grayscale-avatar-600nw-2281862025.webp",
            imgp: "",
            link: "",
            text: "Angular or React \n" +
                "Angular has few jobs, but in good companies \n" +
                "React has a lot of work, but there is a lot of competition and most of them are small companies or start-ups \n" +
                "I'm tired and I don't know what to choose \n" +
                "By the way, I am 29 and not a college graduate related to the field ",


        },
        {
            name: "jana",
            imgu: "assert/vector-flat-illustration-grayscale-avatar-600nw-2281862025.webp",
            imgp: "",
            link: "",
            text: "In any field of programming, they say you must study the basics first \n" +
                "C++ for example \n" +
                "Oop \n" +
                "DS&A \n" +
                "software engineering \n" +
                "Designing patterns \n" +
                "Operating system \n" +
                "SOLID \n" +
                "They say the basics of cyber security are different from theirs \n" +
                "I want to know the basics of cyber security",


        },
        {
            name: "anas",
            imgu: "assert/vector-flat-illustration-grayscale-avatar-600nw-2281862025.webp",
            imgp: "",
            link: "",
            text:"Good evening\n" +
                "What is easier to program in Python or C???"
        },


        {
            name: "reem",
            imgu: "assert/vector-flat-illustration-grayscale-avatar-600nw-2281862025.webp",
            imgp: "",
            link: "",
            text:"rking on .net back end and you have a wide background. html css jQuery js. I have 20 days. Do I need to study something about the UAE for the course? I don't know if it will be enough or not, because I don't have any background on the entire front end. Thank you."

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

export default Hoom;


