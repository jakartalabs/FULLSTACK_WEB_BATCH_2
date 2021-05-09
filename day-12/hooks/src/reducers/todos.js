const todosReducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case 'addTodo':
      return [
        ...state,
        {
          id: state.length,
          name: action.name,
        }
      ];
    case 'removeTodo':
      return state.filter((_, index) => index !== action.index);
    default:
      return state;
  }
};

export default todosReducer;