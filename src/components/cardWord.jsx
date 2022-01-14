import style from './cardWord.module.css';
import React, { useState } from 'react';

const {cardWord} = style;

function Card({word,transcription,translation}) {
const [isFront, chengeFront] = useState(true)

function Clik(){
    chengeFront(!isFront) 
}
    if (isFront){
    return <div className={cardWord}>{word} <button onClick={Clik}>перевернуть</button></div>;
    } else {
    return <div className={cardWord}>{translation}  {transcription} <button onClick={Clik}>перевернуть</button></div> ;
    }
}
/*class Button extends Comment(){
    constructor(props){
        super(props);
        this.state = {}; //условие проходящие по всемму массиву data
    }

    onForwardClick = () => {
        this.useState({

        })   
    }
    
    onBackClick = () => {
        this.useState({

        })
    }

    render(){
        return(
        <div className="Button">{}
        <button onClick={this.onForwardClick}>вперед</button>;
    <button onClick={this.onBackClick}>назад</button>
    </div>)
    }
}  */
    export default Card