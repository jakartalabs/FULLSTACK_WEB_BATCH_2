import React, { Component } from 'react'
import Input from "../components/Input";
import Button from "../components/Button";
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { loginAction, clear as alertActionClear } from '../redux/actions'
export class Login extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(values){
    const { loginAction } = this.props;
    loginAction(values);
  }

  render() {
    const { _alert } = this.props;
    return (
      <div className="w-full">
        <div className="flex justify-center my-8 flex-col flex-wrap items-center">
          <p>Fresh Market</p>
          <div className="box-border h-96 w-1/3 p-4 border-2 mt-8 shadow-sm rounded-md">
            <div className="flex flex-row justify-between mt-10 px-4">
              <h1 className="text-lg">Masuk</h1> <h1 className="text-lg">Daftar</h1>
            </div>
            <div className="">{
              _alert && (
                <span>{_alert.message}</span>
              )
            }</div>
            <div className="flex flex-col mt-6 mx-28">
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
                    <label className="text-sm">Nomor HP atau Email</label>
                    <Input 
                      type="email"
                      name="userId"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email} />
                    {errors.email && touched.email && errors.email}
                    <label className="text-sm">Password</label>
                    <Input
                      type="password"
                      name="password"
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
  return { _alert: alert, auth };
}

const actions = {
  loginAction,
  alertActionClear
}
export default connect(mapStateToProps, actions)(Login)
