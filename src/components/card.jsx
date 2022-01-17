import style from './cardWord.module.css';
import React, { useState } from 'react';


const {cardWord} = style;

function Card({english,transcription,russian}) {
const [isFront, chengeFront] = useState(true)

function Clik(){
    chengeFront(!isFront) ;
}
    if (isFront){
    return <div className={cardWord}>{english} <button onClick={Clik}>перевернуть</button></div>;
    } else {
    return <div className={cardWord}>{russian}  {transcription} <button onClick={Clik}>перевернуть</button></div> ;
    }
}

    export default Card