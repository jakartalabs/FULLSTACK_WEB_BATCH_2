import React from 'react'
import Logo from '../assets/img/Freshnesecom.png';
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { connect } from 'react-redux';

function NavSearch(props) {
  const { cart } = props;
  return (
    <div className="flex flex-row">
      <div className="w-1/4 flex flex-row">
        <img src={Logo} className="self-center" style={{ width: "200px" }} />
      </div>
      <div className="w-1/2 flex justify-center">
        <div className="mt-1 relative rounded-md shadow-sm w-1/2">
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
              {/* All Categories */}
            <select className="rounded-l-md p-2" name="categories">
              <option value="All Categories">All Categories</option>
              <option value="All Categories">All Categories2</option>
            </select>
          </div>
          <input type="text" name="price" id="price" className="ml-36 py-2 outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-3/4 pl-6 pr-4 text-sm border border-gray-500 rounded rounded-r-md" placeholder=""/>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-1/4 flex flex-row">
        <div className="flex flex-row self-center w-20 ml-auto">
          <Dropdown color="white" />
          
          <span class="relative inline-block">
            <Link
              to="/cart"
            >
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-6 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cart && cart.items && (
              <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{cart.items.length}</span>
            )}
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const { cart } = state;
  return { cart };
}

export default connect(mapStateToProps, null)(NavSearch)