import React from 'react';
import './NotesList.css';
import Todo from './Todo';
const NotesList = ({ todos, setTodos }) => {
  return (
    <div className='todoList'>
      <ul>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todos={todos}
              text={todo.text}
              todo={todo}
              setTodos={setTodos}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default NotesList;
