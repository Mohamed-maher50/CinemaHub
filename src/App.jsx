import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/utility/Navbar";
import SearchContainer from "./components/Search/SearchContainer";
import { SearchProvider } from "./contexts/SearchContext";
import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import Test from "./pages/Test";
import LanguageLayout from "./components/Layout/LanguageLayout";
import NotFoundPage from "./pages/NotFoundPage";
const LazyLoadedMovePage = React.lazy(() => import("./pages/MoviePage"));
const LazyLoadedDiscoverMovies = React.lazy(() =>
  import("./pages/DiscoverMovies")
);
const LazyLoadedPeoplePage = React.lazy(() => import("./pages/PeoplePage"));
function App() {
  const { lang } = useSelector((state) => state.SettingsReducer);

  return (
    <div
      className=" min-h-screen bg-primary "
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <Routes>
        <Route index element={<Navigate to="/en" replace />} />
        <Route path=":lang/" element={<LanguageLayout />}>
          <Route path="" index element={<Home />} />
          <Route path="test" element={<Test />} />
          <Route
            path="movie/:movieId"
            element={
              <Suspense>
                <LazyLoadedMovePage />
              </Suspense>
            }
          />
          <Route
            path="people/:personId"
            element={
              <Suspense>
                <LazyLoadedPeoplePage />
              </Suspense>
            }
          />
          <Route
            path="discover"
            element={
              <Suspense>
                <LazyLoadedDiscoverMovies />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
