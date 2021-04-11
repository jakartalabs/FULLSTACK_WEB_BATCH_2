import React, { Component } from 'react'

export class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Click"
    }
  }
  render() {
    let style = {backgroundColor: 'blue'};
    let disabled = this.props.disabled || false;
    let text = this.props.text || this.state.text;
    console.log(this.props.onClick);
    if(disabled==false) {
       style = { backgroundColor: 'green' };
    }
    if(disabled){
      text = "Loading";
    }

    return (
      <button disabled={disabled} style={style} onClick={this.props.onClick}>{text}</button>
    )
  }
}

export default Button
