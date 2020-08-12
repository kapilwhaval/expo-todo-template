import React from 'react';
import { FlexContainerCenter, Input, CustomButton, Heading, Link } from '../../components';
import { View } from 'react-native';
import { Form } from 'native-base';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default ({ navigation }) => {

  const initialValues = {
    email: '',
  };

  const onSubmit = (values) => {
    navigation.navigate('Login');
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address.').required('Email cannot be empty.')
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <FlexContainerCenter>
      <View style={{ width: '80%' }}>
        <Heading>Forgot Password</Heading>
        <Form onSubmit={formik.handleSubmit}>
          <Input label="Email" errorText={formik.errors.email} value={formik.values.email} onChange={(value) => formik.setFieldValue("email", value)} />
          <CustomButton icon={null} mode="contained" onPress={formik.handleSubmit} >Send Reset Link</CustomButton>
          <Link onPress={() => navigation.navigate('Login')}>Back to Login</Link>
        </Form>
      </View>
    </FlexContainerCenter>
  );
}