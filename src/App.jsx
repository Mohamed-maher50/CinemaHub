import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/utility/Navbar";
import SearchContainer from "./components/Search/SearchContainer";
import { SearchProvider } from "./contexts/SearchContext";
import React, { Suspense } from "react";
import { useSelector } from "react-redux";
const LazyLoadedMovePage = React.lazy(() => import("./pages/MoviePage"));
const LazyLoadedDiscoverMovies = React.lazy(() =>
  import("./pages/DiscoverMovies")
);
const LazyLoadedPeoplePage = React.lazy(() => import("./pages/PeoplePage"));
function App() {
  const SettingsReducer = useSelector((state) => state.SettingsReducer);

  return (
    <div className=" min-h-screen bg-primary">
      <SearchProvider>
        <Navbar />
        <SearchContainer />
      </SearchProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/movie/:movieId"
          element={
            <Suspense>
              <LazyLoadedMovePage />
            </Suspense>
          }
        />
        <Route
          path="/people/:personId"
          element={
            <Suspense>
              <LazyLoadedPeoplePage />
            </Suspense>
          }
        />
        <Route
          path="/discover"
          element={
            <Suspense>
              <LazyLoadedDiscoverMovies />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
