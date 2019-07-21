let nextTodoId = 1;

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  complete: false,
  text
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const removeTodo = id => ({
  type: "REMOVE_TODO",
  id
});

