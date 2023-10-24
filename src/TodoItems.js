import React from 'react';
import TodoItem from './TodoItem';

const TodoItems = ({ todoList, handleToggleComplete, handleDelete }) => {
  return (
    <div>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          
          handleToggleComplete={handleToggleComplete}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TodoItems;
