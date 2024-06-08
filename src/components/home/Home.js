import mainItem from "./../../assets/images/main-item.jpg";
import starIcon from "./../../assets/images/yellow-star-icon.png";
import playIcon from "./../../assets/images/play-icon.png";
import addIcon from "./../../assets/images/add-icon.png";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import "./home.scss";
import { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import { Link } from "react-router-dom";

function Home() {
  const [recommended, setRecommended] = useState([]);

  const splideOptions = {
    // rewind: true,
    autoplay: true,
    pauseOnHover: false,
    pagination: false,
    drag: false,
    gap: "1rem",
    step: 1,
    perPage: 6,
    mediaQuery: "max",
    breakpoints: {
      576: {
        perPage: 1,
      },
      767: {
        perPage: 2,
      },
      992: {
        perPage: 3,
      },
    },
    autoScroll: {
      speed: 1,
    },
  };

  const apiOptions = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTFlMGFhNGM0OTJjYzRjZWM1MzZhYWRhNjk4ZWJkNiIsInN1YiI6IjY1YTE5YWI3MWI1YWU1MDEyNjczODFmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NoL92vdY9qNsnAW1UuRPK196TGCAlkssqoCR2EWVe6U",
    },
  };

  function getData() {
    fetch("https://api.themoviedb.org/3/movie/popular", apiOptions)
      .then((response) => response.json())
      .then((response) => setRecommended(response.results))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <div className="hero">
        <div className="main-item">
          <div className="main--item-film">
            <img src={mainItem} alt="" />
          </div>
          <div className="main--item-info">
            <h2>Lost In Space 2</h2>
            <p>Lorem ipsum via qualification data information</p>
            <p className="d-flex align-items-center mb-4">
              <img className="icon me-2" src={starIcon} alt="star Icon" />
              <span>4.8</span>
            </p>
            <div className="actions">
              <button type="button" className="action-btn main-btn">
                <img src={playIcon} alt="" />
                Watch Now
              </button>
              <button type="button" className="action-btn secondary-btn">
                <img src={addIcon} alt="" />
                My List
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="recommended">
        <div className="recommended-films">
          <h4>Recommended For You</h4>
          <Splide options={splideOptions} aria-label="My Favorite Images">
            {recommended ? (
              recommended.map((film) => {
                return (
                  <SplideSlide key={film.id}>
                    <div className="film">
                      <Link to={`details/${film.id}`}>
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                          alt=""
                        />
                      </Link>
                    </div>
                  </SplideSlide>
                );
              })
            ) : (
              <Loader />
            )}
          </Splide>
        </div>
      </div>
    </main>
  );
}

export default Home;
