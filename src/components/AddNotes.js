import React from 'react';
import './AddNotes.css';

const AddNotes = ({ inputText, setInputText, todos, setTodos }) => {
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { completed: false, text: inputText, id: Math.random() * 1000 },
    ]);
    setInputText('');
  };
  return (+++++++++++++++++++++++++++++++++++++++++++++++++
    <div className='container' onSubmit={inputHandler}>
      <form>
        <label htmlFor='userInput'>Notes</label>
        <input
          value={inputText}
          type='text'
          id='userInput'
          placeholder='Enter Note'
          onChange={inputHandler}
        />
        <button onClick={submitHandler} type='submit'>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddNotes;
