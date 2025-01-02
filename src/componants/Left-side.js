import react from "react";
import './Left-side.css';
import QuestionButtons from "./Question-buttons";
const LeftSide = () => {
    return (
        <aside className="left-side">
            <nav className="questions-container" style={{backgroundColor: "white"}}>
                <h2>Questions</h2>
                <ul className="questions-list">
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
                </ul>
            </nav>
        </aside>
    )

};

export default LeftSide;