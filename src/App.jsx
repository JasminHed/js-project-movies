import { BrowserRouter, Route, Routes } from "react-router-dom";

import MovieDetail from "./pages/MovieDetail";
import Movies from "./pages/Movies.jsx";
import NotFound from "./pages/NotFound.jsx";
import GlobalStyle from "./styling/GlobalStyle.jsx";

export const App = () => {
  return (
    <>
    <h1 className="sr-only">Movie Database App</h1>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
