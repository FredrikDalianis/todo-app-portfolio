import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'




const TodoItem = ({ todo, handleToggleComplete, handleDelete }) => {
  const { id, text, completed, date } = todo;

  return (
    <div className={`todo-item ${completed ? "complete" : ""}`}>
        <label htmlFor="checkbox-done">{completed ? "Done" : ""}</label>
        
        <table colSpan="3">
       
       <thead>
          <tr>
       
          </tr>
       </thead>
        
           
        <tbody>
          <tr>
            <td>
     {/*        {
              completed ? 
            

            <FontAwesomeIcon icon={faSquareCheck} beat style={{color: "#97e28d",}} /> 
            
            :  
            <input
                type="checkbox"
                id="checkbox-done"
                checked={completed}
                onChange={() => handleToggleComplete(id)}
              />  
              } */}
              <input
                type="checkbox"
                id="checkbox-done"
                checked={completed}
                onChange={() => handleToggleComplete(id)}
              />  
            

             
            </td>
            <td>{text}</td>
            <td>{date}</td>
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
