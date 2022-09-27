import React from 'react';
import {SafeAreaView, View, Image, Alert} from 'react-native';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import styles from './Login.style';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';

import {API_AUTH_URL} from '../../config/config';
import usePost from '../../hooks/usePost';

const Login = ({navigation}) => {
  const {data, loading, error, post} = usePost();
  const dispatch = useDispatch();

  console.log(data);

  function handleLogin(values) {
    console.log(values + ' 121');
    post(API_AUTH_URL + '/login', values);
  }

  if (error) {
    Alert.alert('Dükkan', 'Bir hata oluştu!');
  }

  if (data) {
    if (data.status === 'Error') {
      Alert.alert('Dükkan', 'Kullanıcı bulunamadı!');
    } else {
      dispatch({type: 'SET_USER', payload: {user}});
    }
    console.log(data);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require('../../assets/shop.png')} />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({values, handleSubmit, handleChange, errors, touched}) => (
          <View style={styles.body_container}>
            <Input
              value={values.username}
              onType={handleChange('username')}
              placeholder="Kullanıcı adını giriniz..."
              iconName="account"
            />
            <Input
              onType={handleChange('password')}
              value={values.password}
              placeholder="Şifre giriniz..."
              iconName="key"
              isSecure
            />
            <Button onPress={handleSubmit} text="Giriş yap" loading={loading} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;

const user = {
  address: {
    geolocation: {lat: '-37.3159', long: '81.1496'},
    city: 'kilcoole',
    street: 'new road',
    number: 7682,
    zipcode: '12926-3874',
  },
  id: 1,
  email: 'john@gmail.com',
  username: 'johnd',
  password: 'm38rmF$',
  name: {firstname: 'john', lastname: 'doe'},
};
