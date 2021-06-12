// import React, { Component } from 'react';
// import RegisterLogoImg from '../assets/img/images.jpeg';
// import {register} from '../api/user';
// import { connect } from 'react-redux';

// import PropTypes from "prop-types";
// import {
//   BrowserRouter as Router,
//   Link,
//   Route,
//   Redirect
//   // withRouter
//   // useHistory
// } from "react-router-dom";

// import { withRouter } from "react-router";

// export class Register extends Component {
//   static propTypes = {
//     match: PropTypes.object.isRequired,
//     location: PropTypes.object.isRequired,
//     history: PropTypes.object.isRequired
//   };
//   constructor(props){
//     super(props);
//     // this.state = {userLogin : ''};
//     // this.handleChange = this.handleChange.bind(this);
//     this.email = React.createRef();
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   // handleChange(event){
//   //   this.setState({userLogin: event.target.value});
//   // }

//   async handleSubmit(event){
//     event.preventDefault();
//     const data = {
//       email: this.email.current.value,
//     }
//     // alert(this.email.current.value);
//     const result= await register(data);
//     console.log(result);
//   }
 

  

//   render() {
//     // const { history } = this.props;
//     function getHistory() {
//       const windowQuery = new URLSearchParams(window.location.search);
//       // let history = useHistory();
//       // history.push({
//       //   pathname: window.location.pathname,
//       //   search: `?${windowQuery.toString()}`
//       // });
//     }
//     function ListItemLink({ to, ...rest }) {
//       return (
//         <Route
//           path={to}
//           children={({ match }) => (
//             <li className={match ? "active" : ""}>
//               <Link to={to} {...rest} >{rest.name}</Link>
//             </li>
//           )}
//         />
//       );
//     }
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="register-logo">
//             Fresh Mart
//           </div>
//         </div>
//         <div className="row">
//           <div className="register-wrap">
//             <div className="register-left">
//               <img src={RegisterLogoImg} style={{width:"300px"}}/>
//             </div>
//             <div className="register-right">
//               <h1 style={{margin:'0px'}}>Daftar Sekarang</h1>
//               <p>Sudah punya akun fresh mart</p>
//               <h3>Atau Dengan</h3>
//               <form onSubmit={this.handleSubmit}>
//                 <input type="text" name="emailPhone" placeholder="0853" ref={this.email} />
//                 <br/>
//                 <input type="submit" className="btn" value="Submit" name="Register"/>
//               </form>
//                 <Router>
//                   <ul>
//                     <ListItemLink to="/" name="somewhere"/>
//                     <ListItemLink to="/somewhere-else" name="test" />
//                   </ul>
//                 </Router>
//               <button onClick={getHistory()}>History</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// // export default withRouter(Register);
// const mapStateToProps = state => {
//   console.log('state', state);
// }
// export default connect(mapStateToProps)(Register)
