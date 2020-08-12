import React, { useState } from 'react';
import { FlexContainerCenter, Input, CustomButton, Heading, Link, Spinner, Error } from '../../components';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/actions/login';
import { login } from '../../api';
import { View } from 'react-native';
import { Form } from 'native-base';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import constants from '../../util/constants';

export default ({ navigation }) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('Show server side error here');
  const dispatch = useDispatch();

  const initialValues = {
    email: 'sincere@april.biz',
    password: 'test123456',
  };

  const onSubmit = (values) => {
    setLoading(true);
    setError('');
    login(values)
      .then((res) => { setLoading(false); dispatch(addUser(res)) })
      .catch(() => { setLoading(false); setError(constants.errors.default) })
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address.').required('Email cannot be empty.'),
    password: Yup.string().min(8, 'Minimum 8 characters are required').required('Password cannot be empty.'),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <FlexContainerCenter>
      <View style={{ width: '80%' }}>
        <Heading>Login</Heading>
        <Form onSubmit={formik.handleSubmit}>
          <Input label="Email" errorText={formik.errors.email} value={formik.values.email} onChange={(value) => formik.setFieldValue("email", value)} />
          <Input label="Password" errorText={formik.errors.password} isSecured value={formik.values.password} onChange={(value) => formik.setFieldValue("password", value)} />
          <Link right onPress={() => navigation.navigate('ForgotPassword')}>Forgot Password?</Link>
          {error ? <Error>{error}</Error> : null}
          {loading ? <Spinner /> : <CustomButton icon={null} mode="contained" onPress={formik.handleSubmit} >Login</CustomButton>}
          <Link onPress={() => navigation.navigate('Register')}>Don't have an account ? Register</Link>
        </Form>
      </View>
    </FlexContainerCenter>
  );
}