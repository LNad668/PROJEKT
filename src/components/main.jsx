import React from "react";
import data from './data';
import WordList from "./wordList";
import style from './main.module.css'
import CardList from "./cardList";

const {main} = style;

export default function Main() {
    return (
        <div className={main}>
        <h3>Список слов</h3>
        <WordList/>
        <CardList data={data} />
        </div>
    );
    }  
