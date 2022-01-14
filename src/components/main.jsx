import React from "react";
import Card from './cardWord';
import data from './data';
import WordList from "./wordList";
import style from './main.module.css'
import Button from "./buten";

const {main} = style;

function Main() {
    return (
        <div className={main}>
        <h3>Список слов</h3>
        <WordList/>
        <Card {...data[1]}/>
        <Button/>
        </div>
    );
    }  

    export default Main