import React from 'react';
import './Todo.css';
const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completedHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
      })
    );
  };
  return (
    <div className='todo'>
      <li>{text}</li>
      <button>
        <i class='far fa-edit'></i>{' '}
      </button>
      <button onClick={deleteHandler}>
        <i class='far fa-trash-alt'></i>
      </button>
      <button onClick={completedHandler}>
        <i class='fas fa-check'></i>
      </button>
    </div>
  );
};

export default Todo;
