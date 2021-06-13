import React, { Component } from 'react'
import Input from "../components/Input";
import Button from "../components/Button";
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import Logo from '../assets/img/Freshnesecom.png';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { loginAction, clear as alertActionClear } from '../redux/actions'

const LoginSchema = Yup.object().shape({
  userId: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export class Login extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(values){
    const { loginAction } = this.props;
    loginAction(values);
  }

  render() {
    const { alert } = this.props;
    return (
      <div className="w-full">
        <div className="flex justify-center my-8 flex-col flex-wrap items-center">
          <img src={Logo} className="self-center" style={{ width: "200px" }} />
          <div className="box-border p-4 border-2 mt-8 shadow-sm rounded-md" style={{width: '450px', height: '500px'}}>
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
                validationSchema={LoginSchema}
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
                        type="text"
                        name="userId"
                        placeholder="User ID "
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.userId} />
                      {errors.userId && touched.userId && errors.userId}
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
                        LOGIN
                      </Button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {alert, auth} =state;
  return { alert, auth };
}

const actions = {
  loginAction,
  alertActionClear
}
export default connect(mapStateToProps, actions)(Login)
