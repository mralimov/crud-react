import './App.css';
import React, { useState } from 'react';
import AddNotes from './components/AddNotes';
import NotesList from './components/NotesList';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  return (
    <>
      <AddNotes
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <NotesList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
