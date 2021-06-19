import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './app.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import CartList from './pages/CartList';
import { Provider } from 'react-redux';
import store from './redux/store';
// // import Home from './pages/TestRouter';
import reportWebVitals from './reportWebVitals';

const userData ={
  login: false,
}
// // product-> ?category &  bestSeller=true & rating
function PrivateRoute({component: Component, roles, ...rest}){
  return (
    <Route {...rest} render={props=>{
      if (!localStorage.getItem('user-fresh-market')){
        return <Redirect to={{pathname:'/login', state: {from: props.location} }} />;
      }
      return <Component {...props} />
    }}/>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/cart" component={CartList} />
          {/* <Route exact path="/product" component={Product} /> */}
          {/* <Route exact path="/product-detail/:id" component={ProductDetail} /> */}
          {/* <Route exact path="/cart" component={ProductDetail} /> */}
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
