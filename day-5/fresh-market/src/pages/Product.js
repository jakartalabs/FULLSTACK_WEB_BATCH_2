import React, { Component } from 'react';
import ProductCard, { CardLand } from "../components/ProductCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { connect } from 'react-redux';
import { getAllCategoryAction, getAllProductAction } from '../redux/actions';

export class Product extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    const { getAllCategory, getAllProductAction } = this.props;
    getAllCategory();
    getAllProductAction();
  }


  render() {
    const { dataProduct, cart } = this.props;
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
            {dataProduct && dataProduct.items && dataProduct.items.map((itemProduct, idx) => {
              return (<div key={idx} className="m-2">
                <ProductCard 
                  data={itemProduct}
                />
              </div>);
            })}
          </div>

        </div>
        <div className="mt-12">
          <h1 className="text-xl">Product Promo</h1>
          <div className="w-full flex flex-row mt-2">
            {dataProduct && dataProduct.items && dataProduct.items.map((itemProduct, idx) => {
              return (<div key={idx} className="m-2"><ProductCard data={itemProduct} /></div>);
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
  const { products, cart } = state;
  return { dataProduct: products, cart };
}

const actions = {
  getAllCategory: getAllCategoryAction,
  getAllProductAction
}

export default connect(mapStateToProps, actions)(Product)
