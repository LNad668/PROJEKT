import React from "react";
import data from "./data";
import Word from "./word";

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

  export default WordList