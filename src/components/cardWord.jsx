import style from './cardWord.module.css';
import React, { useState } from 'react';

const {cardWord} = style;

function Card({word,transcription,translation}) {
const [isFront, chengeFront] = useState(true)

function Clik(){
    chengeFront(false) 
}

function Clik2(){
    chengeFront(true) 
}
    if (isFront){
    return <div className={cardWord}>{word} <button onClick={Clik}>перевернуть</button></div>;
    } else {
    return <div className={cardWord}>{translation}  {transcription} <button onClick={Clik2}>перевернуть</button></div> ;
    }
    
    
    }

    export default Card