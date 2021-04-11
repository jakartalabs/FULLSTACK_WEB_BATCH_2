import React, { Component } from 'react'

export default class Card extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    console.log(this.props.children)
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
