import { NavLink } from 'react-router-dom';
import { arrowRight } from '../../assets/images';
import { useState } from 'react';
import './faq.scss';

const FaqSidebar = () => {
  const [isActive, setIsActive] = useState(1);

  return (
    <ul className="faq_sidebar">
      <li>
        <div className="main__link">
          <NavLink
            exact="true"
            to="/faq"
            id="event-badging"
            end
            onClick={() => setIsActive(1)}
          >
            Event Badging
          </NavLink>
          <img src={arrowRight} alt="arrow" />
        </div>
        {isActive === 1 && (
          <div className="sub__links">
            <NavLink exact="true" to="/faq"></NavLink>
          </div>
        )}
      </li>

      <li>
        <div className="main__link">
          <NavLink
            exact="true"
            to="/projectfaq"
            end
            onClick={() => setIsActive(2)}
          >
            Project Badging
          </NavLink>
          <img src={arrowRight} alt="arrow" />
        </div>
        {isActive === 2 && (
          <div className="sub__links">
            <NavLink exact="true" to="/projectfaq"></NavLink>
          </div>
        )}
      </li>
    </ul>
  );
};

export default FaqSidebar;