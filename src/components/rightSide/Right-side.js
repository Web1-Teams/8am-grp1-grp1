
import './Right-side.css';
import PageButtons from "../pageButtons/Page-buttons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const RightSide = () => {
  return (
      <aside className="right-side">
          <nav className="center-container">
            <PageButtons title="Home" icon={<FontAwesomeIcon icon={faHouse} />}/>
            <PageButtons title="Profile" icon={<FontAwesomeIcon icon={faUser} />}/>
            <PageButtons title="Scholarship" icon={<FontAwesomeIcon icon={faGraduationCap} />}/>
            <PageButtons title="Jobs" icon={<FontAwesomeIcon icon={faBriefcase}  />}/>
            <PageButtons title="Courses" icon={<FontAwesomeIcon icon={faBook}  />}/>
          </nav>
      </aside>
)
};

          export default RightSide;
