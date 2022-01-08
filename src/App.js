
import './App.css';
import { isEditable } from '@testing-library/user-event/dist/utils';
import Heder from './components/heder';
import Footer from './components/footer';
import Card from './components/cardWord';
import data from './components/data';
import WordList from './components/wordList';

import { useState } from 'react';

  function Main() {
    return (
      <>
        <h3>Список слов</h3>
        <WordList/>
        <Card {...data[0]}/>
      </>
    );
    }



/*function Word ({ word, transcription, translation, topic}){
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
  

function WordList() {
  const wordList = data.map((item) => {
  return <Word key={item.word} {...item} />;
}
  )

  return (
    <table border="2">
      <thead>
        <tr>
          <td>слово</td>
          <td>перевод</td>
          <td>транскрипция</td>
          <td>Тема</td>
          <td>Кнопки</td>
        </tr>
      </thead>
      <tbody>{wordList}</tbody>
    </table>
  );}*/

function App() {
  return (
  <>
    <Heder/>
    <Main/>
    <Footer/>
  </>
  );
}

export default App;

