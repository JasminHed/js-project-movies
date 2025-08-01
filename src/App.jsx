import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components"

import MovieDetail from "./pages/MovieDetail";
import Movies from "./pages/Movies.jsx";
import NotFound from "./pages/NotFound.jsx";
import GlobalStyle from "./styling/GlobalStyle.jsx";

const HiddenHeading = styled.h1`
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const App = () => {
  return (
    <>
      <HiddenHeading>Movie Database App</HiddenHeading>
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
