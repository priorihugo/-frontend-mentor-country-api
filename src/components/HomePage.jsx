import { useEffect, useState } from "react";
import CountriesList from "./CountriesList";
import CountryDetails from "./CountryDatails";
import Header from "./Header";
import SearchBar from "./SearchBar";
import styled, { keyframes } from "styled-components";

import { BrowserRouter as Router, Route, Outlet, Routes } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

function HomePage() {
  return (
    <Wrapper>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element = { <CountriesList/>} />
          <Route path="countries/:name" element = {<CountryDetails/>} />
        </Routes>
      </Router>
    </Wrapper>
  );
}

export default HomePage;
