import style from './cardWord.module.css';
import React, { useEffect, useState, useRef } from 'react';
import CardList from './cardList';



const {cardWord} = style;

export default function Card({ english,transcription,russian, id}) {

    const [isFront, setIsFront] = useState(true)

    const ref = useRef(null);
    useRef(() =>{
        if (ref.current){
            ref.current.focus();
        }
    });

    function Clik(){
    setIsFront(!isFront)  ;
   //addCheckedWords();
    }
        useEffect (() => {
        setIsFront(true);}, [id]);

    if (isFront){
    return <div className={cardWord} >{english} <button onClick={Clik} ref={ref}>Проверить</button></div>;
    } else {
    return <div className={cardWord}>{russian}  {transcription} </div> ; //<button onClick={Clik}>Назад</button>
    }
}

   