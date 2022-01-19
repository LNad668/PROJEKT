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

function Heder() {
    return (
    <>
    <Router>
    <Link to= "/WordList">Список слов</Link>
    <Link to= "/CardList">Тренировка </Link>
    <Link to='#'>Список по теме </Link>
  
  
<h1>Заголовок Сайта </h1>

        <Routes>
          <Route exact path="/wordList" element={<WordList />} />
          <Route exact path="/CardList" element={<CardList data={data} />} />

          <Route path="*" element={<NoMatch />} />
        </Routes>
        
    </Router>
    
    </>
    );
  }

  export default Heder