import React, { Component } from 'react';
import { connect } from 'react-redux';
import Currency from "../components/Currency";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getAllCategoryAction, cartActionRemove, cartActionDecrement, cartActionIncrement } from '../redux/actions';


export class CartList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: this.props.cart
    }
  }
  componentDidMount() {
    const { getAllCategory, cart } = this.props;
    getAllCategory();
    this.setState(cart)

  }

  render() {
    const { cartActionRemove, cartActionDecrement, cartActionIncrement} = this.props;
    const {cart} = this.state;
    const summary = () => {
      let price=0;
      let productCount=0;
      if (cart && cart.items && cart.items.length){
        cart.items.map(item=> {
          price += item.priceBuyBy * item._qty;
          productCount+= item._qty;  
        })
      }
      return (<>
        <div className="font-bold">Total harga <Currency>{price}</Currency></div>
        <div className="text-sm">Total Jumlah Product {productCount}</div>
      </>);
    }
    return (
      <div className="p-10">
        <Header />
        <div className="flex flex-row p-10">
          <div className="w-3/4 flex flex-col">
            Cart
            {cart && cart.items && cart.items.map((itemCart, idx) => {
              return (<div key={idx} className="p-5 my-4 rounded-md border border-gray-300 pr-4 flex flex-col" style={{ width: '780px', height: '250px' }}>
                <div className="font-bold">{itemCart.name}</div>
                <div className="flex flex-row">
                  <div className="rounded-md h-full bg-gray-100" style={{ width: '100px', height: '100px'}}>

                  </div>
                  <div className="p-4 self-center">
                    <p className="text-base mt-1">{itemCart.description}</p>
                    <div className="font-bold"><Currency>{itemCart.priceBuyBy}</Currency></div>
                    <div className="text-sm">{itemCart.discountPercentage} %</div>
                  </div>
                </div>
                <div className="flex flex-row p-2 mt-4" style={{width: '150px'}}>
                  <div className="mr-2" onClick={() => cartActionRemove(idx)}>HAPUS</div>
                  <div className="mx-4" onClick={() => cartActionDecrement({id: itemCart.id})}>-</div>
                  <div>{itemCart._qty}</div>
                  <div className="mx-4" onClick={() => cartActionIncrement({ id: itemCart.id })}>+</div>
                </div>
              </div>);
            })}
          </div>
          <div className="w-1/4 flex flex-col">
            Summary
            <div className="rounded-md border border-gray-300 flex flex-col h-auto p-8 mt-4">
              {summary()}
            </div>
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
  cartActionRemove,
  cartActionDecrement,
  cartActionIncrement
}

export default connect(mapStateToProps, actions)(CartList)

