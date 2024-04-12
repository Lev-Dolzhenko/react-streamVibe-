import "./App.css";
import { useState, useEffect } from "react";

//pages
import HomePage from "./pages/HomePage";
import MoviesShowsPage from "./pages/MoviesShowsPage";
import SupportPage from "./pages/SupportPage";
import SubscriptionPage from "./pages/SubscriptionsPage";

//react rounter dom
import { Route, Routes, Navigate } from "react-router-dom";

//axios
import axios from "axios";

function App() {
  // const [films, setFilms] = useState([]);
  // const [film, setFilm] = useState(null);

  // const url =
  //   "https://api.kinopoisk.dev/v1.4/movie?page=1&limit=20&selectFields=id&selectFields=name&selectFields=description&selectFields=shortDescription&selectFields=type&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=movieLength&selectFields=genres&selectFields=poster&selectFields=backdrop&selectFields=logo&selectFields=persons&selectFields=premiere&selectFields=similarMovies&selectFields=top10&selectFields=top250&sortField=&sortType=1&type=movie&lists=top250";
  // const headers = {
  //   "X-API-KEY": "0G4PNZN-WQQ42Q4-NY9G8M7-9P4KZP1",
  // };

  // useEffect(() => {
  //   axios
  //     .get(url, { headers })
  //     .then((response) => {
  //       setFilms(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Ошибка при загрузке данных:", error.response?.data);
  //     });
  // }, [url]);

  return (
    <>
      <Routes>
        <Route path="*" element={<HomePage to="/" />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/MoviesShowsPage" element={<MoviesShowsPage />} />
        <Route path="/SupportPage" element={<SupportPage />} />
        <Route path="/SubscriptionsPage" element={<SubscriptionPage />} />
      </Routes>
    </>
  );
}

export default App;
