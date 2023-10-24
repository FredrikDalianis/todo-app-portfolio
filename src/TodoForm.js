import React, { useRef,useState } from 'react';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const TodoForm = ({ handleAddTodo }) => {
  const [newTodo, setNewTodo] = useState('');


    const [date, setDate] = useState('');
    const dateInputRef = useRef(null);
    var id=0;
 

  
  
    const handleDateChange = (e) => {
      setDate(e.target.value);
    };


  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTodo.trim() === '') {
      // Ignorera tomma uppgifter
      return;
    }

 

    handleAddTodo({
        id:Date.now(),
        text: newTodo,
        completed:false,
        date:date,
        
      
    });

    setNewTodo('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form" name="todos">
      <input
        
        type="text"
        placeholder="Add a new todo"
        value={newTodo}
        onChange={handleChange}
        className="todo-input"
      />
      <input type="date" onChange={handleDateChange} ref={dateInputRef}/>

      <button type="submit" className="add-button" >
        <PlaylistAddIcon></PlaylistAddIcon>
      </button>
    </form>
  );
};

export default TodoForm;
