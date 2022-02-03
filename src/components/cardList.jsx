import Card from "./card"
import { useState } from "react"
import style from './cardWord.module.css';

const {stylbutton, card_list, cardWord} = style;

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
        <div className={card_list}>
            <Card {...data[index]} />
            
            {
                index > 0 && <button className={stylbutton} onClick={onBack}>Предыдущие</button>
            }
                {index +1}/{data.length} 
            <button className={stylbutton} onClick={onNext}>Следующие</button>    
           
        </div>
    )}
}
