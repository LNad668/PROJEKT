import React from "react";
import Card from './components/cardWord';
import data from './components/data';
import WordList from "./wordList";

function Main() {
    return (
        <>
        <h3>Список слов</h3>
        <WordList/>
        <Card {...data[0]}/>
        </>
    );
    }  


  export default Main