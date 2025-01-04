
import './Right-side.css';
import PageButtons from "../pageButtons/Page-buttons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
const RightSide = () => {
  return (
      <aside className="right-side">
          <nav className="center-container">
            <PageButtons title="Home"  link="/Hoom" icon={<FontAwesomeIcon icon={faHouse} />}/>
            <PageButtons title="Profile" link="/Profile" icon={<FontAwesomeIcon icon={faUser} />}/>
            <PageButtons title="Scholarship" link="/Scholarship" icon={<FontAwesomeIcon icon={faGraduationCap}  />}/>
            <PageButtons title="Jobs"  link="/Jop" icon={<FontAwesomeIcon icon={faBriefcase}  />}/>
            <PageButtons title="Courses" link="/Courses"  icon={<FontAwesomeIcon icon={faBook}  />}/>
          </nav>
      </aside>
)
};

          export default RightSide;
