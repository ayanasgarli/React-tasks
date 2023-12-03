import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Input, Button, Checkbox } from 'antd';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const Register = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
    isAdmin: false,
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    isAdmin: Yup.boolean(),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Register values:', values);
    setTimeout(() => {
      setSubmitting(false);
      Swal.fire({
        icon: 'success',
        title: 'Registered successfully!',
        showConfirmButton: false,
        timer: 1500,
      });
    }, 1000);
  };

  return (
    <div style={{ width: '300px', margin: 'auto', marginTop: '100px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Register</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              as={Input}
              prefix={<UserOutlined />}
              type="text"
              name="username"
              placeholder="Username"
              style={{ marginBottom: '12px' }}
            />
            <ErrorMessage name="username" component="div" style={{ color: 'red' }} />

            <Field
              as={Input}
              prefix={<MailOutlined />}
              type="email"
              name="email"
              placeholder="Email"
              style={{ marginBottom: '12px' }}
            />
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />

            <Field
              as={Input.Password}
              prefix={<LockOutlined />}
              type="password"
              name="password"
              placeholder="Password"
              style={{ marginBottom: '12px' }}
            />
            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />

            <Field as={Checkbox} name="isAdmin" style={{ marginBottom: '12px' }}>
              Is Admin
            </Field>

            <div style={{ marginTop: '12px' }}>
              <Button type="primary" htmlType="submit" loading={isSubmitting} style={{ marginRight: '8px', width: '40vh' }}>
                Register
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
