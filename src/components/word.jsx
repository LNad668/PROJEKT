import React from "react";
import { useState } from 'react';


function Word ({ english, transcription, russian, topic}){
  const [isEditable, chengeEditable] = useState(false); 

  const [words, setWord] = useState({ english,russian,transcription,topic })

  function onClik(){
    chengeEditable (true) ;
  }

function onChengeEnglish(evt){
  setWord({
    english: evt.target.value,
    russian: words.russian,
      transcription: words.transcription,
      topic: words.topic,
  });
}

function onChengeRussian(evt){
  setWord({
    english: words.english,
    russian: evt.target.value,
      transcription: words.transcription,
      topic: words.topic,
  });
}

function onChengeTranscription(evt){
  setWord({
    english: words.english,
    russian: words.russian,
      transcription: evt.target.value,
      topic: words.topic,
  });
}

function onChengeTopic(evt){
  setWord({
    english: words.english,
    russian: words.russian,
      transcription: words.transcription,
      topic: evt.target.value,
  });
}

function onSave(){
  chengeEditable(false);
}

function onCansel(){
  setWord({
    english,
    russian,
    transcription,
    topic,
  });
  
  chengeEditable(false);
}

if (!isEditable){
  return(  
    <tr>
    <td>{words.english}</td>
    <td>{words.russian}</td>
    <td>{words.transcription}</td>
    <td>{words.topic}</td>
    <td>
    <button>Delite</button>
    <button onClick={onClik}>Edit</button>
    </td>
    </tr>
  );
} else {
  return(
  <tr>
    <td><input Value={words.english} onChange={onChengeEnglish}/></td>
    <td><input Value={words.russian} onChange={onChengeRussian}/></td>
    <td><input Value={words.transcription} onChange={onChengeTranscription}/></td>
    <td><input Value={words.topic} onChange={onChengeTopic} ></input></td>
    <td>
      <button onClick={onSave}>Save</button>
      <button onClick={onCansel}>Cancel</button>
      </td>
      </tr>
      );
}
}

  export default Word