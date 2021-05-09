import React from 'react';

const TodosContext = React.createContext({
  todos: [],
  todosDispatch: () =>{},
});

export { TodosContext as default };