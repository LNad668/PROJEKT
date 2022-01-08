import React from "react";
import data from "./data";
import { useState } from 'react';


function Word ({ word, transcription, translation, topic}){
  const [isEditable, chengeEditable] = useState(false); 

  function onClik(){
    chengeEditable (true);
  }
  function onClick2(){
    chengeEditable(false)
  }

    return (
      <tr>
          <td>{isEditable ? <input  deafultValue={word}/> : word}</td>
          <td>{isEditable ? <input deafultValue={translation}/> : translation}</td>
          <td>{isEditable ? <input deafultValue={transcription}/> : transcription}</td>
          <td>{topic}</td>
          <td> 
            {isEditable ? <button>Seve</button> : null}
            {isEditable ? null : <button>Delite</button> }
            {isEditable ? (<button onClick={onClick2}>Cenel</button>
            ) : ( <button onClick={onClik}>Edit</button>)}
          </td>
        </tr>
    );
  }
  
  export default Word