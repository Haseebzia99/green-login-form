import React from 'react';
import logo from './green-form-logo.svg';
import './GreenLoginForm.scss';

import { Formik, Form, Field, ErrorMessage } from 'formik';

const handleFormErrors = (values) => {
  const errors = {};

  if (!values.email) {
   errors.email = null;
  } else
  if (
   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
   errors.email = 'Email Address is Invalid';
  }
  return errors;
}
const GreenLoginForm = () => (
  <div className='form-container'>
   <Formik
     initialValues={{ email: ''}}
     validate={values => handleFormErrors(values)}
     onSubmit={(values, { setSubmitting }) => {
       setTimeout(() => {
         alert(JSON.stringify(values, null, 2));
         setSubmitting(false);
       }, 400);
     }}
   >
     {({ isSubmitting }) => (
      <div className="form-content">

        <img src={logo} className="green-logo" alt="green-logo" />

        <div className="form-headers">
          <h2>Example login screen</h2>
          <h3>Getting started with Green.</h3>
        </div>

        <Form>
          <div className="email-field">
            <label htmlFor="email" id="email-label">Email Address</label>
            <Field type="email" name="email" id="email-input" maxLength="40"/>
            <ErrorMessage name="email" component="div" />
          </div>

          <div className="checkbox-field">
            <Field type="checkbox" name="checkbox" id="checkbox-input"/>
            <label htmlFor="checkbox" id="checkbox-label">Remember this device</label>
          </div>

          <div>
            <button type="submit" disabled={isSubmitting} id="signin-btn" checked="value">
              Sign In
            </button>
          </div>
        </Form>
      </div>
     )}
   </Formik>
  </div>
);

 export default GreenLoginForm;
