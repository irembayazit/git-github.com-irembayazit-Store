import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Input.style';

const Input = ({placeholder, isSecure, onType, value, iconName}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={onType}
        secureTextEntry={isSecure}
      />
      <Icon style={styles.icon} name={iconName} size={25} />
    </View>
  );
};

export default Input;
