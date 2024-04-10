import "./App.css";

//pages
import HomePage from "./pages/HomePage";
import MoviesShowsPage from "./pages/MoviesShowsPage";
import SupportPage from "./pages/SupportPage";
import SubscriptionPage from "./pages/SubscriptionsPage";

import { Route, Routes, Navigate } from "react-router-dom";

function App() {
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
