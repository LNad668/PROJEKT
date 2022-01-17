import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import WordList from "./wordList";
import Card from "./card";
import CardList from "./cardList";

function Heder() {
    return (
    <>
    <Router>
    <Link to= "/WordList">Список слов</Link>
    <Link to= "/CardList">Тренировка </Link>
    <a href='#'>Список по теме </a>
  
<h1>Заголовок Сайта </h1>

        <Routes>
          <Route exact path="/wordList" element={<WordList />} />
          <Route exact path="/CardLict" element={<CardList />} />
        </Routes>
        
    </Router>
    
    </>
    );
  }

  export default Heder