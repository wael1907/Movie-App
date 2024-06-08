// import { useState } from "react";

import "./App.scss";
import Home from "./components/home/Home";
import Movies from "./components/movies/Movies";
import Loader from "./components/loader/Loader";
import Navbar from "./components/navbar/Navbar";
import Series from "./components/series/Series";
import Sidebar from "./components/sidebar/Sidebar";

import { Routes, Route, Outlet } from "react-router-dom";
import Shows from "./components/tv-show/Shows";
import { useState } from "react";
import Details from "./components/film-details/Details";

function App() {
  const [load, setLoad] = useState(true);
  const [collapsed,setCollapsed] = useState(false)




  function checkCollapsed() {
    if(collapsed === false) {
      setCollapsed(true)
    } else {
      setCollapsed(false)
    }
  }


  setTimeout(() => {
    setLoad(false)
  }, 1000);



  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <div className="App">
          <Navbar />
          <Sidebar collapsed={collapsed} collapsedHandler={checkCollapsed} />
          <div className={collapsed ? 'content sb-collapse' : 'content sb-not-collapse'}>
            <Routes>
              <Route path="/" element={<Home />}></Route>

              <Route path="movies" element={<Outlet />}>
                <Route path="" element={<Movies />}></Route>
                <Route path="details/:movieId" element={<Details />}></Route>
              </Route>

              <Route path="series" element={<Outlet />}>
                <Route path="" element={<Series />}></Route>
                <Route path="details/:movieId" element={<Details />}></Route>
              </Route>

              <Route path="shows" element={<Outlet />}>
                <Route path="" element={<Shows />}></Route>
                <Route path="details/:movieId" element={<Details />}></Route>
              </Route>

              <Route path="details/:movieId" element={<Details />}></Route>

            </Routes>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
