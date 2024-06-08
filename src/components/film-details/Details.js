import starIcon from "./../../assets/images/yellow-star-icon.png";
import playIcon from "./../../assets/images/play-icon.png";
import addIcon from "./../../assets/images/add-icon.png";

import "./details.scss";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";

import Loader from "./../loader/Loader";

function Details() {
  const location = useLocation();
  // const { hash, pathname, search } = location;

  let api_url = "";

  const params = useParams();
  const [movie, setMovie] = useState({});

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTFlMGFhNGM0OTJjYzRjZWM1MzZhYWRhNjk4ZWJkNiIsInN1YiI6IjY1YTE5YWI3MWI1YWU1MDEyNjczODFmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NoL92vdY9qNsnAW1UuRPK196TGCAlkssqoCR2EWVe6U",
    },
  };

  function getDetails() {
    fetch(api_url, options)
      .then((response) => response.json())
      .then((response) => setMovie(response))
      .catch((err) => console.error(err));
  }

  function checkCategory() {
    if (
      location.pathname.includes("series") ||
      location.pathname.includes("shows")
    ) {
      api_url = `https://api.themoviedb.org/3/tv/${params.movieId}?language=en-US`;
    } else {
      api_url = `https://api.themoviedb.org/3/movie/${params.movieId}?language=en-US`;
    }
  }

  useEffect(() => {
    checkCategory();
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <>
      {movie ? (
        <div className="movie-content">
          <div className="movie-img">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt=""
            />
          </div>
          <div className="movie-info">
            <div className="actions d-flex flex-wrap gap-3 mb-3">
              <button type="button" className="action-btn main-btn">
                <img src={playIcon} alt="" />
                Watch Now
              </button>
              <button type="button" className="action-btn secondary-btn">
                <img src={addIcon} alt="" />
                My List
              </button>
            </div>
            <div className="d-flex gap-3 align-items-end flex-wrap">
              <h3>{movie.original_title || movie.original_name}</h3>
              <p className="d-flex align-items-center">
                <img className="icon me-2" src={starIcon} alt="star Icon" />
                <span>{Number(movie.vote_average).toFixed(1)}</span>
              </p>
            </div>
            <p className="description">
              {String(movie.overview).slice(0,100) || "Doesn't Have Overview"}
            </p>
            <div className="add-info">
              <p className="language">
                Language:{" "}
                <span>{String(movie.original_language).toUpperCase()}</span>
              </p>
              <p className="date">
                Release Date:{" "}
                <span>{movie.release_date || movie.last_air_date}</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Details;
