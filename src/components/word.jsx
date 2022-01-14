import React from "react";
import data from "./data";
import { useState } from 'react';


function Word ({ word, transcription, translation, topic}){
  const [isEditable, chengeEditable] = useState(false); 

  function onClik(){
    chengeEditable (!isEditable) ;
  }
  

    return (
      <tr>
          <td>{isEditable ? <input  Value={word}/> : word}</td>
          <td>{isEditable ? <input Value={translation}/> : translation}</td>
          <td>{isEditable ? <input Value={transcription}/> : transcription}</td>
          <td>{topic}</td>
          <td> 
            {isEditable ? <button>Seve</button> : null}
            {isEditable ? null : <button>Delite</button> }
            {isEditable ? (<button onClick={onClik}>Cenel</button>
            ) : ( <button onClick={onClik}>Edit</button>)}
          </td>
        </tr>
    );
  }
  
  export default Word