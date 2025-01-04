import {useState} from "react";
import Page from "../components/Page";



const Jop = () => {

    const [posts, setPosts] = useState([
        {
            name: "jops",
            imgu: "assert/vector-flat-illustration-grayscale-avatar-600nw-2281862025.webp",
            imgp: "assert/468365092_1102946395167151_757761905293798696_n.jpg",
            link: "https://foras.ps/ar/Jobs/1577",
            text: "Station J is looking for someone with project management experience, this position will provide a grea job opportunity as they have strong experience in training, organizing events and writing reports in" +
                " English...",


        },

        {
            name: "jops",
            imgu: "assert/vector-flat-illustration-grayscale-avatar-600nw-2281862025.webp",
            imgp: "assert/463683108_122122977110436242_873993584305391023_n.jpg",
            link: "https://www.linkedin.com/jobs/view/4115421547",
            text: "Project HOPE is an international NGO with more than 1,000 engaged employees and volunteers who work around the globe, responding to the world’s most pressing global health challenges. Throughout our 60-year legacy, Project HOPE has treated millions of patients, provided more than $3 billion worth of medicines to local health care organizations around the world helped build hundreds of health programs from the ground up, and responded to humanitarian crises worldwide.\n" +
                "\n" +
                "Code Of Conduct\n" +
                "\n" +
                "It is our shared responsibility and obligation to treat each other with respect, take affirmative steps to prevent matters involving Sexual Exploitation & Abuse and Trafficking in Persons, and to disclose all potential and actual violations of our Code of Conduct, which may include Conflicts of Interest, Fraud, Corruption, Discrimination or Harassment. Together we can reinforce a culture of respect, integrity, accountability, and transparency. ",


        },
        {
            name: "jops",
            imgu: "assert/vector-flat-illustration-grayscale-avatar-600nw-2281862025.webp",
            imgp: "assert/468282776_122128537196436242_1992385054919534528_n.jpg",
            link: "https://www.linkedin.com/jobs/view/4055107656",
            text: "Requirements\n" +
                "This is a great opportunity to supplement your income while looking for longer or more full-time work, all while contributing to the development of new AI models using your domain expertise!\n" +
                "Our client has hired over 100 BT Talent and intends to hire hundreds more!\n" +
                "You’ll have the flexibility to work as much or as little as you choose - 20hrs/week is suggested, but not a limit. Start working in as little as 48 hours.\n" +
                "What to expect: If qualified, you’ll complete an ID verification & be invited to complete a 30-minute technical interview, typically scheduled within 48 hours of being invited. The interview will consist of technicals, choosing from: JS, Java, C++, and Python. If you successfully pass the interview, you’ll be approved and able to begin work ASAP. Otherwise, the next step will be to complete an async rating & writing assessment.\n" +
                "In both scenarios, you will be compensated for successfully completing the assessment, up to $175.",


        },
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
            imgp: "assert/463463710_122122977116436242_4322810101246291435_n.jpg",
            link: "https://www.linkedin.com/jobs/view/4072016176",
            text: "Job Summary\n" +
                "\n" +

                "Ensure desired outcomes for the engagement are clearly defined and well understood by all parties\n" +
                "Ensure outcomes are SMART (specific measurable achievable realistic and timely)\n" +
                "Ensure is well upon by all parties\n" +
                "Ensure  the desired outcomes are identified well understood and agreed upon by all parties\n" +
                "End with and contributing to one or more of the engagement themes\n" +
                "Discover and analyze the current-state client operating model for software delivery\n" +
                "Establis model s well-aligned with the client operating model\n" +
                "Ident l state delivery operating model in terms of possible effect on quality efficiency and efficacy\n" +
                "Rationalize the themes desired outcomes and expected timelines with the initial-state operating model and projected ability to continuously improve/mature the model to ensure they are realistic in the overall context\n" +
                "Ens to an established agreed-upon and continuously maturing operating model",


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

export default Jop;


