import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const TodoList = ({ todos, users }) => (
  <div>
    <ul className="todo-list">
      {todos && todos.length ? todos.map((todo) => {
        return <Todo key={`todo-${todo.id}`} todo={todo} />
      }) : "No item"}
    </ul>

    <ul className="user-list">
      {users && users.length ? users.map((user) => {
        return <li className="user-item" >{user.email}</li>
      }) : "No item"}
    </ul>
  </div>
)

const mapStateToProps = state => {
  const { byIds, allIds } = state.todos || {}
  const todos = allIds && allIds.length ? allIds.map(
    id => (byIds ? {...byIds[id], id}: null)
  ) : null;
  console.log(todos);

  const users = state.users.users && state.users.users.length ? state.users.users: null;
  return { todos, users }
}

export default connect(mapStateToProps)(TodoList);