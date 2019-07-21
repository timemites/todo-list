import React from "react";
import { addTodo } from "../actions/todo.actions";
import { connect } from "react-redux";

const AddTodo = ({ dispatch }) => {
  let input;
  let onClick = (e) => {
    if (input.value.trim() !== "") {
      e.preventDefault();
      dispatch(addTodo(input.value.trim()));
    }
  };
  return (
    <form className="todoInput">
      <input className="input" type="text" ref={node => (input = node)} 
        placeholder="Add an item"/>
      <button type="submit" onClick={onClick}>
        Add
      </button>
      </form>
  );
};

export default connect()(AddTodo);
