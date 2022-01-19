import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import WordList from "./wordList";
import CardList from "./cardList";
import data from "./data";
import NoMatch from "./NoMatch";
import Home from "./home";

function Heder() {
    return (
    <>
    <Router>
    <Link to= "/Home">
        <img  src="https://img.icons8.com/nolan/64/school.png"/></Link>
    <Link to= "/WordList">Список слов</Link>
    <Link to= "/CardList">Тренировка </Link>
    
    <Link to='#'>Список по теме </Link>

        <Routes>
          <Route exact path="/wordList" element={<WordList />} />
          <Route exact path="/CardList" element={<CardList data={data} />} />
          <Route exact path="/Home" element={<Home />} />

          <Route path="*" element={<NoMatch />} />
        </Routes>
        
    </Router>
    
    </>
    );
  }

  export default Heder