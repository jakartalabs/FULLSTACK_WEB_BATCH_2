import React, { Component } from 'react'
import Input from "../components/Input";
import Button from "../components/Button";
import { Formik } from 'formik';
import { login } from '../api/user';


export class Login extends Component {
  render() {
    return (
      <div className="w-full">
        <div className="flex justify-center my-8 flex-col flex-wrap items-center">
          <p>Fresh Market</p>
          <div className="box-border h-96 w-1/3 p-4 border-2 mt-8 shadow-sm rounded-md">
            <div className="flex flex-row justify-between mt-10 px-4">
              <h1 className="text-lg">Masuk</h1> <h1 className="text-lg">Daftar</h1>
            </div>
            <div className="flex flex-col mt-6 mx-28">
              <Formik
                initialValues={{ userId: '', password: '' }}
                // validate={values => {
                //   const errors = {};
                //   if (!values.email) {
                //     errors.email = 'Required';
                //   } else if (
                //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                //   ) {
                //     errors.email = 'Invalid email address';
                //   }
                //   return errors;
                // }}
                onSubmit={async (values, { setSubmitting }) => {
                  const result = await login(values);
                  console.log(result);
                  if(result.status!==200){
                    alert(result.message);
                  }
                  setTimeout(() => {
                    // alert(JSON.stringify(values, null, 2));
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
                  /* and other goodies */
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
              {/* <div className="self-center mt-4">
                
              </div> */}
              {/* <div className="self-center mt-4 w-full mx-10">
                
              </div> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
