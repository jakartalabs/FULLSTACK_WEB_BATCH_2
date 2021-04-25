import React from 'react';
import { connect } from 'react-redux';
// import {  } from '../redux/actions';

const Todo = ({todo, toogleTodo}) => (
  // onClick = {() => toogleTodo(todo.id)}
  <li className="todo-item" >
    {todo && todo.completed ? "OK": "Cancel"}{" "}
    <span>
      {todo.content}
    </span>
  </li>
);


export default connect(null, null)(Todo);