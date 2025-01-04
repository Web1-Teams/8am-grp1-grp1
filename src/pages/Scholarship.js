import {useState} from "react";
import Page from "../components/page/Page";



const Scholarship= () => {

    const [posts, setPosts] = useState([
        {
            name: "jops",
            imgu: "assert/vector-flat-illustration-grayscale-avatar-600nw-2281862025.webp",
            imgp: "assert/smart.jpg",
            link: "https://forms.gle/ftVNLoQ37HtAZkyB8",
            text:" (ت                            (منح تدريبية جزئية في مجالات تكنولوجيا المعلومات و علم البرمجةIntroducing The Hope International Company, based in Jordan (Amman - Hussein Business Park), offering training programs in Information Technology and Programming.Featured Training Courses for the Month:1. PHP and Laravel (40h) 2. Python and Machine learning (60h) 3. Business Analysis (30h) 4. CCNA (60h) 5.  Ethical hacking (40h) + Cyber Security 6.  Flutter 7. ASP .NET MVC"
        },
        {
            name: "jops",
            imgu: "assert/vector-flat-illustration-grayscale-avatar-600nw-2281862025.webp",
            imgp: "assert/scholarship2.jpg",
            link: "https://tinyurl.com/44hadn8b",
            text: "Discover New Horizons in Australia! 🌏✈️📚 Study in Australia and Experience Top-Notch Education. Embrace the Journey, Grow, and Succeed! Find out more and make your dreams come true"


        },
        {
            name: "jops",
            imgu: "assert/vector-flat-illustration-grayscale-avatar-600nw-2281862025.webp",
            imgp: "assert/scholarship1.jpg",
            link: "https://tinyurl.com/4mhzr88j",
            text: "Discover valuable PhD scholarship opportunities in the USA for international students. Learn about the eligibility, application process, and how these scholarships can support your academic journey."


        }
        ,{
            name: "jops",
            imgu: "assert/vector-flat-illustration-grayscale-avatar-600nw-2281862025.webp",
            imgp: "assert/scholarship3.jpg",
            link: "https://tinyurl.com/m3fwcpbb",
            text: "Learn More About scholarships for international students to study in Canada! 📚"


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

export default Scholarship;