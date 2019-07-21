// getInitialState
const INITIAL_DATA = {
  todos: [{
        id: 0,
        text: 'Walk the Dog',
        complete: false,
        }
        ]
  }

const todos = (state = INITIAL_DATA, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return {
          ...state,
          todos:[
            ...state.todos,
          {
            id: action.id,
            complete: action.complete,
            text: action.text
          }
        
        ]};
      case "TOGGLE_TODO":
        return {
          ...state,
          todos:[
          ...state.todos.map(todo =>
            todo.id === action.id ? { ...todo, complete: !todo.complete } : todo )
          ],
      }
      case "REMOVE_TODO":
        return {
          ...state,
          todos:[
          ...state.todos.filter(todo => todo.id !== action.id )
          ],
      }
      default:
        return state;
    }
  };
  export default todos;
  