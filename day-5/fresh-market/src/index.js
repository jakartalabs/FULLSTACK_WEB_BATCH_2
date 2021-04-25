// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import './app.scss';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Register from './pages/Register';
// import Login from './pages/Login';
// import Home from './pages/Home';
// // import Home from './pages/TestRouter';
import reportWebVitals from './reportWebVitals';

// const userData ={
//   login: false,
// }
// // product-> ?category &  bestSeller=true & rating

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <Switch>
//         <Route exact path="/register" component={Register} />
//         <Route exact path="/login" component={Login} />
//         <Route exact path="/" component={Home} />
//         {/* <Route exact path="/product" component={Product} /> */}
//         {/* <Route exact path="/product-detail/:id" component={ProductDetail} /> */}
//         {/* <Route exact path="/cart" component={ProductDetail} /> */}
//       </Switch>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { incrementAction, decrementAction } from './redux/action';
// import { createStore } from 'redux';
// //Reducer
// const reducer = (state = 0, action) => { 
//   console.log(action);
//   if (action.type === 'INCREMENT') return ++state;
//   return state; 
// }

// const store = createStore(reducer);
// const incrementAction = { type: 'INCREMENT' }

console.log('before -> ', store.getState());
store.dispatch(incrementAction);
console.log('after increment -> ', store.getState())
store.dispatch(decrementAction);
console.log('after decrement -> ', store.getState())

// //Get state
// console.log(store.getState());


const App = () => {
  return (
    <div className="container">
      <h1>Hello, World!</h1>
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
