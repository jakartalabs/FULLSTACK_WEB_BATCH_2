import React from 'react'
import Button from "./Button";
import Currency from "./Currency";
import { connect } from 'react-redux';
import { cartActionAdd } from '../redux/actions';

export function Card(props) {
  const { cartActionAdd, data } = props;

  // title, description, price, discountPrice, btnBuy='enable'
  return (
    <div className="w-card-width rounded-md border border-gray-300 p-4">
      {/* img */}
      <div className="w-full rounded-md h-44 bg-gray-100">

      </div>
      <div className="mt-4">
        <h2 className="font-semibold text-xl">{data.name}</h2>
        <p className="text-xs mt-1 text-gray-500 font-bold">SKU: {data.sku}</p>
        <p className="text-sm mt-1">{data.description}</p>
      </div>
      <div className="flex flex-row justify-between mt-4">
        <div className="flex flex-col">
          <div className="font-bold"><Currency>{data.priceBuyBy}</Currency></div>
          <div className="text-sm">{data.discountPercentage} %</div>
        </div>
        <div className="self-center">
          <Button
            btnType="primary"
            size="lg"
            onClick={() => cartActionAdd(data)}
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  )
}

export function CardLand({data}){
  // const { cartActionAdd} = props;
  return (
    <div className="rounded-md border border-gray-300 pr-4 flex flex-row" style={{width: '780px', height: '250px'}}>
      {/* img */}
      <div className="rounded-md h-full bg-gray-100" style={{width: '250px'}}>

      </div>
      <div className="mt-6 px-4 mr-16">
        <h2 className="font-semibold text-xl">{data.title}</h2>
        <p className="text-xs mt-2">{data.description}</p>

        <div className="flex flex-row space-x-1 my-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </div>
        <div className="flex flex-row mt-6 text-sm text-gray-500">
          <div className="mr-4">
            <div>Farm</div>
            <div>Delivery</div>
            <div>Freshness</div>
            <div>Stock</div>
          </div>
          <div>
            <div>Farm</div>
            <div>Delivery</div>
            <div>Freshness</div>
            <div>Stock</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-6">
        <div className="font-bold">{data.price}</div>
        <div className="text-sm mt-2">{data.discountPrice}</div>
        <div className="text-xs font-bold text-gray-300 mt-6">Free Shipping</div>
        <div className="text-sm">Delivery 1 day</div> 
        <div className="mt-6">
          <Button
            btnType="primary"
            size="lg"
            onClick={() => cartActionAdd(data)}
            arrow="right"
          >
            Product Detail
          </Button>
        </div>
      </div>
    </div>
  )
}
const actions = {
  cartActionAdd
}

const mapStateToProps = state => {
  return { cart: state.cart}
}


export default connect(mapStateToProps, actions)(Card)

