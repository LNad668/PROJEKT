import React from 'react'

function Card({word,
transcription,
translation,
topic}) {
    return (
        <div className={cordWord}>
            <div className='word'>{word}</div>
            <div className='transcription'>{transcription}</div> 
            <div className='translation'>{translation}</div>
            <div className='topic'>{topic}</div>
        </div>
    );
}

export default Card;