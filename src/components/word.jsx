import React from "react";
import data from "./data";
import { useState } from 'react';


function Word ({ word, transcription, translation, topic}){
  const [isEditable, chengeEditable] = useState(false); 

  const [words, setWord] = useState({ word,translation,transcription,topic })

  function onClik(){
    chengeEditable (true) ;
  }

function onChengeWord(evt){
  setWord({
      word: evt.target.value,
      translation: words.translation,
      transcription: words.transcription,
      topic: words.topic,
  });
}

function onChengeTranslation(evt){
  setWord({
    word: words.word,
      translation: evt.target.value,
      transcription: words.transcription,
      topic: words.topic,
  });
}

function onChengeTranscription(evt){
  setWord({
    word: words.word,
      translation: words.translation,
      transcription: evt.target.value,
      topic: words.topic,
  });
}

function onChengeTopic(evt){
  setWord({
    word: words.word,
      translation: words.translation,
      transcription: words.transcription,
      topic: evt.target.value,
  });
}

function onSave(){
  chengeEditable(false);
}

function onCansel(){
  setWord({
    word,
    translation,
    transcription,
    topic,
  });
  
  chengeEditable(false);
}

if (!isEditable){
  return(
    <tr>
    <td>{words.word}</td>
    <td>{words.translation}</td>
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
    <td><input Value={words.word} onChange={onChengeWord}/></td>
    <td><input Value={words.translation} onChange={onChengeTranslation}/></td>
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