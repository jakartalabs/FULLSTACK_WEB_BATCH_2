import React from 'react';

const TodosContext = React.createContext({
  todos: [],
  todosDispatch: () =>{},
  karyawan:[],
  jabaatan:[]
});

export { TodosContext as default };