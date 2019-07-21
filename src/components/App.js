import React from "react";
import Header from "./Header";
import AddTodo from "../containers/AddTodo";
import TodoList from "../containers/TodoList";
import "./App.css";
const App = () => (
  <div className="wrapper">    
    <Header />
    <AddTodo />
    <TodoList />
  </div>
);

export default App;
