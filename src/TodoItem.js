import React from "react";

const TodoItem = ({ todo, handleToggleComplete, handleDelete }) => {
  const { id, text, completed, date } = todo;

  return (
    <div className={`todo-item ${completed ? "complete" : ""}`}>
      <label htmlFor="checkbox-done">{completed ? "Done" : ""}</label>

      <table colSpan="3">
        <thead>
          <tr></tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <input type="checkbox" id="checkbox-done" onChange={()=> handleToggleComplete(id)} />
              
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
