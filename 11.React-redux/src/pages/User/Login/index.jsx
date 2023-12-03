import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Input, Button, Checkbox } from 'antd';
import * as Yup from 'yup';

const Login = () => {
  const initialValues = {
    username: '',
    password: '',
    remember: false,
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Login values:', values);
    setSubmitting(false);
  };

  return (
    <div style={{ width: '300px', margin: 'auto', marginTop: '100px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
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
              as={Input.Password}
              prefix={<LockOutlined />}
              type="password"
              name="password"
              placeholder="Password"
              style={{ marginBottom: '12px' }}
            />
            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />

            <Field as={Checkbox} name="remember" style={{ marginBottom: '12px' }}>
              Remember me
            </Field>

            <div style={{ marginTop: '12px' }}>
              <Button type="primary" htmlType="submit" loading={isSubmitting} style={{ marginRight: '8px', width: '40vh' }}>
                Log in
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
