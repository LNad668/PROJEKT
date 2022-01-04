import logo from './logo.svg';
import './App.css';
import data from './word/data';
import { isEditable } from '@testing-library/user-event/dist/utils';


function Heder() {
  return (
  <>
  <a href='#'>Список слов </a>
  <a href='#'>Тренировка </a>
  <a href='#'>Список по теме </a>

  <h1>Заголовок Сайта </h1>
  </>
  );
}

  function Main() {
    return (
      <>
        <h3>Список слов</h3>
        <WordList/>
        <Card {...data[1]}/>
      </>
    );
    }

function Footer() {
  return (
  <>
  <footer>
    <h2>Это футер</h2>
    </footer>
  </>
  );
  }

function Card({word,transcription,translation,topic, }) {
  let isFront = false;
  if (isFront){
    return <div>{word}</div>;
  } else {
    return <div>{translation}  {transcription}</div> ;
  }
  }
function Word ({ word, transcription, translation, topic, isEditable}){
    return (
      <tr>
          <td>{isEditable ? <input  difaultvalue={word}/> : word}</td>
          <td>{isEditable ? <input difaulvalue={translation}/> : translation}</td>
          <td>{isEditable ? <input difaulvalue={transcription}/> : transcription}</td>
          <td>{topic}</td>
          <td>
            {isEditable ? <button>Seve</button> : null}
            <button>Delite</button> 
            <button>Edit</button>
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
  );}

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
