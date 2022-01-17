import Card from "./card"
import { useState } from "react"

import style from './cardWord.module.css';



const {cardWord} = style;

export default function CardList({ data }){
        const [index, setIndex ] = useState(0);

    function onNext(){
        setIndex (index +1);
    }
    function onBack(){
        setIndex (index -1);
    }

if (index === data.length){
    return(
        <div className={cardWord}>"Конец урока!"</div>
    );
} else {
    return(
        <div className="card-list">
            <Card {...data[index]}/>
            {
                index > 0 && <button onClick={onBack}>Предыдущие</button>
            }
            {index +1}/{data.length}
            <button onClick={onNext}>Следующие</button>
        </div>
    )}
}
