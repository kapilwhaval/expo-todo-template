import React from 'react';
import { FlexContainerCenter, Input, CustomButton, Heading, Link } from '../../components';
import { View } from 'react-native';
import { Form } from 'native-base';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default ({ navigation }) => {

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const onSubmit = (values) => {
    console.log(values)
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Please enter your name'),
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
        <Heading>Register</Heading>
        <Form onSubmit={formik.handleSubmit}>
          <Input label="Name" errorText={formik.errors.name} value={formik.values.name} onChange={(value) => formik.setFieldValue("name", value)} />
          <Input label="Email" errorText={formik.errors.email} value={formik.values.email} onChange={(value) => formik.setFieldValue("email", value)} />
          <Input label="Password" errorText={formik.errors.password} isSecured value={formik.values.password} onChange={(value) => formik.setFieldValue("password", value)} />
          <CustomButton icon={null} mode="contained" onPress={formik.handleSubmit} >Register</CustomButton>
          <Link onPress={() => navigation.navigate('Login')}>Already have an account? Login</Link>
        </Form>
      </View>
    </FlexContainerCenter>
  );
}