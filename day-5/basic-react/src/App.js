import React, { Component } from 'react'
import './app.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      age: null,
      position: [],
      date: new Date(),
    }
  }

  componentDidMount(){
    this.timerID = setInterval(
      ()=> this.tick(), 1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
    this.setState({ position: null });
  }

  componentDidUpdate(){
    // this.handleSaveBtn();
  }

  tick(){
    this.setState({
      date: new Date(),
    });
  }

  handleInput = (e) => {
    const { name, value } = e.target;
    if (name === 'txtName') {
      this.setState({ name: value });
    }

    if (name === 'txtAge') {
      const dateNow = new Date();
      const userBirthDate = new Date(value); 
      const getInTime =dateNow.getTime() - userBirthDate.getTime();
      // console.log(getInTime/(1000*3600*24));
      const age = new Date(getInTime);
      const ageNow= parseInt(Math.abs(age.getFullYear()-1970), 10);
      console.log(typeof ageNow);
      this.setState({ age: value });
    }
    if (name === 'txtPosition') {
      this.setState({ position: value });
    }
  }
  handleSaveBtn = () => {
    console.log('This Save btn')
    console.log(this.state.name);
    console.log(this.state.age);
    console.log(this.state.position);
  }

  add =() => {
    const position = this.state.position.length;
    const positionNow = [];
    this.state.position.push(position+1);
    // console.log(positionNow);
    this.setState({ position: this.state.position });
  }

  render() {
    const { name, age, position } = this.state;
    return (
      <div>
        {/* <form> */}
        <input type="text" name="txtName" className="txtName" id="txtName" placeholder="Name" onChange={this.handleInput} />
        <br />
        <input type="text" name="txtAge" className="txtAge" id="txtAge" placeholder="21" onChange={this.handleInput} />
        <br />
        <input type="text" name="txtPosition" className="txtPosition" id="txtPosition" placeholder="Engineer" onChange={this.handleInput} />
        {position.map((item)=>{
          return(<input type="text" name="txtPosition" className="txtPosition" id="txtPosition" placeholder="Engineer" onChange={this.handleInput} />)
        })}
        <button onClick={this.add}>add</button>

        <button onClick={this.handleSaveBtn}>Save</button>
        {/* </form> */}
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{position}</h1>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

export default App
