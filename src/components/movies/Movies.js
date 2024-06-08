import { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import AOS from "aos";

import "./movies.scss";
import { Link } from "react-router-dom";

function Movies() {
  const [movies, setMovies] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTFlMGFhNGM0OTJjYzRjZWM1MzZhYWRhNjk4ZWJkNiIsInN1YiI6IjY1YTE5YWI3MWI1YWU1MDEyNjczODFmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NoL92vdY9qNsnAW1UuRPK196TGCAlkssqoCR2EWVe6U",
    },
  };

  function changeDataByPage(id) {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${id}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .catch((err) => console.error(err));
  }

  function getData() {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    AOS.init();
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {movies.length === 0 ? (
        <Loader />
      ) : (
        <section className="movies">
          <h4>Movies</h4>
          <div className="movies-items">
            {movies ? (
              movies.map((movie) => {
                return (
                  <div className="film" data-aos=" " key={movie.id}>
                    <Link to={`details/${movie.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path || movie.backdrop_path}`}
                        alt={movie.original_name}
                      />
                    </Link>
                  </div>
                );
              })
            ) : (
              <Loader />
            )}
          </div>
          <div className="pagination">
            <button
              className="action-btn"
              onClick={(e) => changeDataByPage(e.target.value)}
              value="1"
            >
              1
            </button>
            <button
              className="action-btn"
              onClick={(e) => changeDataByPage(e.target.value)}
              value="2"
            >
              2
            </button>
            <button
              className="action-btn"
              onClick={(e) => changeDataByPage(e.target.value)}
              value="3"
            >
              3
            </button>
            <button
              className="action-btn"
              onClick={(e) => changeDataByPage(e.target.value)}
              value="4"
            >
              4
            </button>
            <button
              className="action-btn"
              onClick={(e) => changeDataByPage(e.target.value)}
              value="5"
            >
              5
            </button>
          </div>
        </section>
      )}
    </>
  );
}

export default Movies;
