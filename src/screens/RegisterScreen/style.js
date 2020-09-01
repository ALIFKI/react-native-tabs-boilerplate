import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  boxShadow: {
    backgroundColor: 'white',
    width: '100%',
    height: 70,
    marginTop: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
});

module.exports = style;
