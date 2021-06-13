import React, { Component } from 'react';
import Input from "../components/Input";
import Button from "../components/Button";
import RegisterLogoImg from '../assets/img/images.jpeg';
import { connect } from 'react-redux';
import { Link} from "react-router-dom";
import Logo from '../assets/img/Freshnesecom.png';
import { Formik } from 'formik';
export class Register extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="w-full">
        <div className="flex justify-center my-8 flex-col flex-wrap items-center">
          <img src={Logo} className="self-center" style={{ width: "200px" }} />
          <div className="flex flex-row flex-wrap box-border p-4 border-2 mt-8 shadow-sm rounded-md" style={{height: "550px"}}>
            <div style={{width: "350px"}} className="my-auto">
               <img src={RegisterLogoImg} style={{width:"320px", height:"180px"}}/>
            </div>
            <div className="my-auto" style={{ width: '350px'}}>
              <div className="flex flex-row justify-between mt-10 px-4">
                <h1 className="text-lg">
                  <Link
                    to={{
                      pathname: "/login",

                    }}
                    className="my-8 bg-green-400 text-white active:bg-green-700 uppercase text-base px-8 py-3 rounded shadow-md hover:bg-green-600 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  >
                    Masuk
                  </Link>
                </h1>
                <h1 className="text-lg">
                  <Link
                    to={{
                      pathname: "/register",

                    }}
                    className="my-8 bg-green-400 text-white active:bg-green-700 uppercase text-base px-8 py-3 rounded shadow-md hover:bg-green-600 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  >
                    Daftar
                  </Link>
                </h1>
              </div>
              {
                alert && alert.message && (
                  <div className="flex justify-center mt-10 mx-auto px-4">
                    <span className="bg-red-400 p-2 rounded text-white w-full">{alert.message}</span>
                  </div>
                )
              }
              <div className="flex flex-col mt-4 mx-auto p-4">
                <Formik
                  initialValues={{ userId: '', password: '' }}
                  onSubmit={async (values, { setSubmitting }) => {
                    this.handleSubmit(values);
                    setTimeout(() => {
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label className="text-sm">Nomor HP atau Email</label>
                        <Input
                          type="email"
                          name="userId"
                          placeholder="User ID "
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email} />
                        {errors.email && touched.email && errors.email}
                      </div>
                      <div className="mb-4">
                        <label className="text-sm">Email</label>
                        <Input
                          type="email"
                          name="userId"
                          placeholder="User ID "
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email} />
                        {errors.email && touched.email && errors.email}
                      </div>
                      <div className="mb-4">
                        <label className="text-sm">Name</label>
                        <Input
                          type="email"
                          name="userId"
                          placeholder="User ID "
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email} />
                        {errors.email && touched.email && errors.email}
                      </div>
                      <div className="mb-4">
                        <label className="text-sm">Password</label>
                        <Input
                          type="password"
                          name="password"
                          placeholder="Password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                        {errors.password && touched.password && errors.password}
                        <Button
                          type="submit"
                          width="w-full"
                          size="lg"
                          disabled={isSubmitting}
                          className="mt-4"
                        >
                          REGISTER
                        </Button>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// export default withRouter(Register);
// const mapStateToProps = state => {
//   console.log('state', state);
// }
export default connect(null, null)(Register)
