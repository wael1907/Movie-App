import "./sidebar.scss";

import homeIcon from "./../../assets/images/home-icon.png";
import movieIcon from "./../../assets/images/movie-icon.png";
import seriesIcon from "./../../assets/images/series-icon.png";
import tvIcon from "./../../assets/images/tv-icon.png";
import favoriteIcon from "./../../assets/images/favorite-icon.png";
import settingsIcon from "./../../assets/images/setting-icon.png";
import logoutIcon from "./../../assets/images/logout-icon.png";
import arrowIcon from "./../../assets/images/arrow-icon.png";
import { Link } from "react-router-dom";


function Sidebar(props) {

  return (
    <div className={props.collapsed ? 'sidebar collapsed' : 'sidebar'}>
      {/* <img className="brand" src={logo} alt="home icon" /> */}

      <ul className="list-group links">
        <li title="Home">
          <Link to='/'>
            <img className="icon" src={homeIcon} alt="home icon" />
            Home
          </Link>
        </li>

        <li title="Movies">
          <Link to="movies">
            <img className="icon" src={movieIcon} alt="movie icon" />
            Movies
          </Link>
        </li>

        <li title="Series">
          <Link to="series">
            <img className="icon" src={seriesIcon} alt="series icon" />
            Series
          </Link>
        </li>

        <li title="Tv Shows">
          <Link to="shows">
            <img className="icon" src={tvIcon} alt="tv icon" />
            Tv Shows
          </Link>
        </li>

        <li title="My Favorites">
          <a href="/">
            <img className="icon" src={favoriteIcon} alt="favorites icon" />
            My Favorites
          </a>
        </li>

        <li title="Settings">
          <a href="/">
            <img className="icon" src={settingsIcon} alt="settings icon" />
            Settings
          </a>
        </li>

        <li title="Log Out">
          <a href="/">
            <img className="icon" src={logoutIcon} alt="logout icon" />
            Log Out
          </a>
        </li>

      </ul>

      <div className="bar-btn" onClick={props.collapsedHandler}>
          <img className="icon bar" src={arrowIcon} alt="arrow icon" />
      </div>
    </div>
  );
}


export default Sidebar;
