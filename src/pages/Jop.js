import {useState} from "react";
import Page from "../components/Page";



const Jop = () => {

    const [posts, setPosts] = useState([
        {
            name: "jops",
            imgu: "assert/vector-flat-illustration-grayscale-avatar-600nw-2281862025.webp",
            imgp: "assert/470823291_122105403602661688_2064386898240828595_n.jpg",
            link: "https://www.facebook.com/share/p/15TZp1d45E/",
            text:"Mastering the Job Interview Preparation is key when it comes to interviews. Here’s how to make a great impression:Research the company: Understand their mission, values, and recent achievements.Practice common questions: Be ready to talk about your strengths, weaknesses, and past experiences.Ask thoughtful questions: Show your interest by inquiring about the role, team, or company culture.Dress appropriately: Follow the company’s dress code, but err on the side of professionalism.Confidence, preparation, and authenticity go a long way."
        },
        {
            name: "jops",
            imgu: "assert/vector-flat-illustration-grayscale-avatar-600nw-2281862025.webp",
            imgp: "assert/468365092_1102946395167151_757761905293798696_n.jpg",
            link: "https://foras.ps/ar/Jobs/1577",
            text: "Station J is looking for someone with project management experience, this position will provide a grea job opportunity as they have strong experience in training, organizing events and writing reports in" +
                " English...",


        },
    ]);

    const deletePost = (text) => {
        setPosts(posts.filter(function(post) {
            return post.text !== text;
        }));

    };
    return(

            <Page posts={posts} onDelete={deletePost}/>


        )

}

export default Jop;


