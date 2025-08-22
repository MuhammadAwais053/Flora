import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import rfSpacing from '../../src/Theme/rfSpacing';
import color from '../../src/Theme/color';

const Screen1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../pic/logo.png')} />
      <Text style={styles.text}>Flora - Your Digital Garden</Text>
      <Text style={styles.text}>Guardian</Text>

      <TouchableOpacity
        style={styles.arrowBtn}
        onPress={() => navigation.navigate('Onboarding2')}>
        <Image source={require('../pic/arrow.png')} style={styles.arrowIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.F_OnBoard,
  },
  image: {
    width: rfSpacing['56x'],
    height: rfSpacing['56x'],
    tintColor: color.F_White,
  },
  text: {
    fontFamily: 'Allura-Regular',
    fontSize: rfSpacing['26x'],
    fontWeight: '400',
    letterSpacing: 1,
    color: color.F_White,
    marginTop: '1%',
    textAlign: 'center',
  },
  arrowBtn: {
    position: 'absolute',
    bottom: rfSpacing['30x'],
    right: rfSpacing['30x'],
  },
  arrowIcon: {
    width: rfSpacing['32x'],
    height: rfSpacing['32x'],
    tintColor: color.F_White,
  },
});
