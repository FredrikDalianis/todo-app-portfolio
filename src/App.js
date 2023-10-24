import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoItems from './TodoItems';
import ExportExcel from './Excelexport';

const STORAGE_KEY = 'TodoKey1337';

const App = () => {
  const [todos, setTodos] = useState([]);
  

  useEffect(() => {
   
    const storedTodos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    console.log('Stored Todos from localStorage:', storedTodos);
    setTodos(storedTodos);
  }, []);
  
  useEffect(() => {
   
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  

  

  const handleAddTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, { id: Date.now(), ...newTodo }]);
  };

  const handleToggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };


  useEffect(() => {
    window.addEventListener('load', () => {
      const storedTodos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      console.log('Page loaded - Stored Todos from localStorage:', storedTodos);
      setTodos(storedTodos);
    });
  }, []);

  return (
    <div>
      <TodoForm handleAddTodo={handleAddTodo} />
      <TodoItems
        todoList={todos}
        handleToggleComplete={handleToggleComplete}
        handleDelete={handleDelete}
      
      />
    
      
    </div>
  );
};

export default App;
