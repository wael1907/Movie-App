import logo from "./../../assets/images/logo.png";
import searchIcon from "./../../assets/images/search-icon.png";
import micIcon from "./../../assets/images/mic-icon.png";
import bellIcon from "./../../assets/images/bell-icon.png";
import userIcon from "./../../assets/images/user-avatar.png";
// import favIcon from "./../../assets/images/favorite-icon.png";

import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="flex-between">
          <Link to="/">
            <img className="brand" src={logo} alt="logo" />
          </Link>
          <div className="right-section ms-auto">
            <div className="search-box">
              <img className="search-icon icon" src={searchIcon} alt="search-icon" />
              <input type="text" placeholder="Search..." />
              <img className="mic-icon icon" src={micIcon} alt="mic-icon" />
            </div>

            <div className="notifications">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                    <img className="bell-icon icon" src={bellIcon} alt="bell-icon" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/#">
                      'Spider Man' New Movie Is Here
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Game Of Thrones Episode 9 Is Available Now !
                    </a>
                  </li>
                </ul>
              </li>
            </div>
{/* 
            <div className="favorite">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                    <img className="user-icon icon" src={favIcon} alt="user-icon" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Another action
                    </a>
                  </li>
                </ul>
              </li>
            </div> */}

            <div className="profile">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"

                >
                    <img className="user-icon icon" src={userIcon} alt="user-icon" />
                </a>
                {/* <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Another action
                    </a>
                  </li>
                </ul> */}
              </li>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
