import React from "react";
import Todo from "../components/Todo";
import { connect } from "react-redux";
import { toggleTodo, removeTodo } from "../actions/todo.actions";

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <ul>
      {todos != null &&
        todos.map(todo => (
          <Todo key={todo.id} {...todo} 
          onClick={() => toggleTodo(todo.id)} 
          handleRemove={() => removeTodo(todo.id)} />
        ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  removeTodo: id => dispatch(removeTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
