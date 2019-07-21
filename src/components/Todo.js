import React from "react";

const Todo = ({ text, complete, onClick, handleRemove }) => {
  return (
    <li>
      <span
      onClick={onClick}
      style={{ textDecoration: complete ? "line-through" : "" }}>
        {text}
      </span>
      <button className="action" onClick={handleRemove}>
        x
      </button>
    </li>
    
  );
};

export default Todo;
