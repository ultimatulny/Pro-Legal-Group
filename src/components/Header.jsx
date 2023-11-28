import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [menuChecked, setMenuChecked] = useState(false);

  const handleLinkClick = () => {
    setMenuChecked(false);
  };

  return (
    <header>
      <ul>
        <div>
          <li>
            <Link to="/">
              <div className="logo"></div>
            </Link>
          </li>
          <li className="marginLeft90 pc-btn">
            <Link to="/about">About Us</Link>
          </li>
          <li className="pc-btn">
            <Link to="/mission">Our Mission & Vision</Link>
          </li>
          <li className="pc-btn">
            <Link to="/leadership">Leadership</Link>
          </li>
        </div>
        <div>
          <li className="pc-btn">
            <Link to="/clients">Private Clients & Family Offices</Link>
          </li>
          <li className="pc-btn">
            <Link to="/corporations">Corporations</Link>
          </li>

          <div className="mobile-menu">
            <input
              type="checkbox"
              id="show-menu"
              role="button"
              checked={menuChecked}
              onChange={() => setMenuChecked(!menuChecked)}
            />
            <label htmlFor="show-menu">&#9776;</label>

            <ul>
              <li>
                <Link to="/" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
             
              <li>
                <Link to="/leadership" onClick={handleLinkClick}>
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/clients" onClick={handleLinkClick}>
                  Private Clients & Family Offices
                </Link>
              </li>
              <li>
                <Link to="/corporations" onClick={handleLinkClick}>
                  Corporations
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </ul>
    </header>
  );
};

export { Header };