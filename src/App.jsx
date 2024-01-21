import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import Navbar from "./components/utility/Navbar";
import SearchContainer from "./components/Search/SearchContainer";
import { SearchProvider } from "./contexts/SearchContext";
import PeoplePage from "./pages/PeoplePage";
import { useTranslation } from "react-i18next";
import DiscoverMovies from "./pages/DiscoverMovies";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className=" min-h-screen bg-primary">
      <SearchProvider>
        <Navbar />
        <SearchContainer />
      </SearchProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<MoviePage />} />
        <Route path="/people/:personId" element={<PeoplePage />} />
        <Route path="/discover" element={<DiscoverMovies />} />
      </Routes>
    </div>
  );
}

export default App;
