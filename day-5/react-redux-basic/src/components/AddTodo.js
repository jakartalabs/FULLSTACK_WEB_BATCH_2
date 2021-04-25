import React from 'react';
import { connect } from 'react-redux';
import { addTodo, fetchUser } from '../redux/actions'

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input:""};
  }

  updateInput = input => {this.setState({input})};

  handleTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input:"" });
  };

  handleFetch = () => {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <input 
          onChange ={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleTodo}>
          Add Todo
        </button>
        <button className="add-todo" onClick={this.handleFetch}>
          Fetch User
        </button>
      </div>
    )
  }
}

export default connect(null, { addTodo, fetchUser })(AddTodo);