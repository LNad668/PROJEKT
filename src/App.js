
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

