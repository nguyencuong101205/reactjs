import {
  SET_TODO_INPUT,
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
} from "./constants";

const initialState = {
  todos: [],
  todoInput: "",
};

function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO: {
      const newTodos = [...state.todos];
      newTodos.splice(action.payload, 1);
      return {
        ...state,
        todos: newTodos,
      };
    }
    case UPDATE_TODO: {
      const newTodos = [...state.todos];
      newTodos[action.payload.index] = action.payload.todo;
      return {
        ...state,
        todos: newTodos,
      };
    }
    default:
      return state;
  }
}

export { initialState };
export default reducer;
