import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#bdbdbd',
    backgroundColor: '#e0e0e0',
    margin: 5,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  body_container: {
    padding: 5,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  price: {
    textAlign: 'right',
    fontSize: 16,
  },
});
