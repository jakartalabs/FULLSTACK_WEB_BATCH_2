import React, {useState} from 'react'
import { Formik, Field, Form } from 'formik';

function UseStateEx() {
  const [dataPribadi, setDataPribadi] = useState();
  const [color, setColor] = useState();

  return (
    <div>
      <h1>Data Diri</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
          setDataPribadi(values);
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="Jane" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <br />
      <button 
        type="submit"
        onClick={() =>setColor('blue')}
      >
        Click Toogle Color
      </button>
      <br />
      <div style={{ width: '100px', height: '100px', border: '1px solid black', backgroundColor: color }}>
        {JSON.stringify(dataPribadi)}
      </div>
    </div>
  )
}

export default UseStateEx
