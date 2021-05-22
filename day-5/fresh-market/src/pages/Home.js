import React, { Component } from 'react';
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Input from "../components/Input";
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
      <div className="p-10">
        <Header />
        <div className="flex flex-row">
          <div className="w-1/4"></div>
          <div className="w-3/4 grid grid-cols-4 gap-y-8">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state', state);
}

export default connect(mapStateToProps, {addData})(Home)
