import React, { Component } from 'react'
import Button from "../components/Button"
import { connect } from 'react-redux';
import { addData } from '../redux/actions';

export class Home extends Component {
  constructor(props){
    super(props);
  }
  handleChange(){
    this.props.addData({title: 'Fullstack'});
  }

  render() {
    this.handleChange();
    return (
      <div className="pt-8">
        <Button 
          btnType="outline" 
          size="lg"
          onClick={()=>alert('test')}
        >
            Default
        </Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state', state);
}

export default connect(mapStateToProps, {addData})(Home)
