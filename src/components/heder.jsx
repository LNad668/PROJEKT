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
import style from "./heder.module.css";


const {styleheder,stylbody} = style;

function Heder() {
    return (
    < div>
    <Router className={styleheder}>
    
    <Link className={styleheder} to= "/Home">
        <img  src="https://img.icons8.com/nolan/64/school.png"/></Link>
    <Link className={styleheder} to= "/Home">Список слов</Link>
    <Link className={styleheder} to= "/CardList">Тренировка </Link>
    
    <Link className={styleheder} to='EROR'>Список по теме </Link>
    

        <Routes >
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/Home" element={<Home />} />
            </Route>
          <Route  exact path="/CardList" element={<CardList data={data} />} />
          
          <Route  path="*" element={<NoMatch />} />
        </Routes>
        
    </Router>
    
    </div>
    );
  }

  export default Heder