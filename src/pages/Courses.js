import {useState} from "react";
import Page from "../components/page/Page";



const Courses = () => {

    const [posts, setPosts] = useState([
        {
            name: "Courses",
            imgu: "assert/vector-flat-illustration-grayscale-avatar-600nw-2281862025.webp",
            imgp: "assert/cours2.jpg",
            link: "https://docs.google.com/.../1YU8XS83vTEhbAspWSNSHX4o.../edit",
            text:"An outstanding opportunity for motivated freelancers to take their businesses to the next stage! Through our program, you will be allocated a well-equipped workspace and involved in intensive training courses to grow your business.To apply, and learn more, click here: "
        },
        {
            name: "Courses",
            imgu: "assert/vector-flat-illustration-grayscale-avatar-600nw-2281862025.webp",
            imgp: "assert/cours1.jpg",
            link: "http://kpitie.najah.edu/Arabic/index.php?page=register&id=68",
            text: "فتح باب التسجيل لدورة (Arduino Step by Step Getting Started).In this course, we will learn how to use the most popular electronic board in the world (ARDUINO) .The method of learning will be learning through projects, with as many projects as possible being offered through the course. We will try to expand the range of projects from beginner to intermediate level in the field of electronic circuit installation and programming, as we will start with simple projects for lighting and sensors and end with more complex projects.Registration link here"
,


        },
        {
            name: "Courses",
            imgu: "assert/vector-flat-illustration-grayscale-avatar-600nw-2281862025.webp",
            imgp: "assert/cours3.jpg",
            link: "https://tinyurl.com/4pm8m85w",
            text: "The door to your new career is open. Walk through with career skills from Google, Meta, Microsoft and more for 65% off (limited time only).With Coursera Plus, you’ll unlock over 7,000 courses on digital marketing, cybersecurity, genAI, and much more.Join the 1 in 4 entry-level Professional Certificate completers who got a new job.**2023 Coursera Learner Outcomes Report.......Registration link here"
,


        },
        {
            name: "Courses",
            imgu: "assert/vector-flat-illustration-grayscale-avatar-600nw-2281862025.webp",
            imgp: "assert/cours4.webp",
            link: "https://bit.ly/40lEb2j",
            text: "تدريب شركة ميكروسوفت الصيفي فتح ياجماعه للطلاب * Microsoft Egypt Development Center summer Engineering Program 2025 ❤️ التدريب للطلاب من كليه حاسبات ومعلومات وهندسه الحاسب واي مجال له علاقه * التدريب لمد شهرين * بدايه التدريب 1 يوليو وحتي 31 اغسطس 2025 * التدريب مجاني بالكامل * شهاده قويه بعد نهايه التدريب * نهايه التقديم 15 فبراير",


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

export default Courses;