import React from "react";

const TodoItem = ({ todo, handleToggleComplete, handleDelete }) => {
  const { id, text, completed ,date} = todo;

  return (
    <div className={`todo-item ${completed ? "complete" : ""}`}>
     
  
        
      <table colSpan="3">
      <tbody>
      <tr>
          <td>{text}
          </td>
          
        <td>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => handleToggleComplete(id)}
          /> {date}
          
          </td>

        </tr>
       

      </tbody>
  

      </table>
          <span></span>
 
     
        <span></span>
     
     
   
     
     <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
