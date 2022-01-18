import style from './cardWord.module.css';
import React, { useEffect, useState } from 'react';


const {cardWord} = style;

function Card({english,transcription,russian, id}) {
const [isFront, setIsFront] = useState(true)


function Clik(){
    setIsFront(!isFront)  
}

useEffect (() => {
    setIsFront(true);}, [id]);

    if (isFront){
    return <div className={cardWord}>{english} <button onClick={Clik}>перевернуть</button></div>;
    } else {
    return <div className={cardWord}>{russian}  {transcription} <button onClick={Clik}>перевернуть</button></div> ;
    }
}

    export default Card