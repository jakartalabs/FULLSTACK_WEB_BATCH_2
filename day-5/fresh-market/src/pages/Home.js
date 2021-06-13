import React, { Component } from 'react';
import ProductCard, {CardLand} from "../components/ProductCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Button from "../components/Button";
import { connect } from 'react-redux';
import { getAllCategoryAction } from '../redux/actions';

export class Home extends Component {
  constructor(props){
    super(props);
  }
  // handleChange(){
  //   this.props.addData({title: 'Fullstack'});
  // }

  componentDidMount(){
    const { getAllCategoryAction} = this.props;
    getAllCategoryAction();
  }

  
  render() {
    const dataProduct =[{
      title: 'Product title',
      description: 'Space for a small product description',
      price: 'Rp 10000',
      discountPrice: 'Rp. 1000',
      status: 'available'
    }, 
    {
      title: 'Product title',
      description: 'Space for a small product description',
      price: 'Rp 10000',
      discountPrice: 'Rp. 1000',
      status: 'available'
    },
    {
      title: 'Product title',
      description: 'Space for a small product description',
      price: 'Rp 10000',
      discountPrice: 'Rp. 1000',
      status: 'available'
    },
      {
        title: 'Product title',
        description: 'Space for a small product description',
        price: 'Rp 10000',
        discountPrice: 'Rp. 1000',
        status: 'available'
      },
      {
        title: 'Product title',
        description: 'Space for a small product description',
        price: 'Rp 10000',
        discountPrice: 'Rp. 1000',
        status: 'available'
      },
      {
        title: 'Product title',
        description: 'Space for a small product description',
        price: 'Rp 10000',
        discountPrice: 'Rp. 1000',
        status: 'available'
      }
  ]
    // this.handleChange();
    return (
      <div className="p-10">
        <Header />
        <div className="flex flex-row">
          <div className="w-1/4">
            <h1 className="text-xl font-medium">Best selling products</h1>
            <ul className="list-none mt-4 mb-4">
              <li>
                <a>
                  Bakery
                </a>
              </li>
              <li>
                <a>
                  Fruit
                </a>
              </li>
              <li>
                <a>
                  Vegetables
                </a>
              </li>
              <li>
                <a>
                  Vegetables
                </a>
              </li>  <li>
                <a>
                  Vegetables
                </a>
              </li>  <li>
                <a>
                  Vegetables
                </a>
              </li>
            </ul>
            <Button
              size="lg"
              arrow="right"
            >
             More Product
            </Button>
          </div>
          <div className="w-3/4 grid grid-cols-4 gap-y-8">
            {dataProduct.length && dataProduct.map(itemProduct=>{
              return (<ProductCard data={itemProduct} />);
            })}
            {/* <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard /> */}
          </div>
         
        </div>
        <div className="mt-12">
          <h1 className="text-xl">Product Promo</h1>
          <div className="w-full flex flex-row mt-2">
            {dataProduct.length && dataProduct.map(itemProduct => {
              return (<div className="m-2"><ProductCard data={itemProduct} /></div>);
            })}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state', state);
}

const actions = {
  getAllCategoryAction
}

export default connect(mapStateToProps, actions)(Home)
