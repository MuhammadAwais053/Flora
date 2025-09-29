import {Image, StyleSheet, Text, View, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import rfSpacing from '../../src/Theme/rfSpacing';
import color from '../../src/Theme/color';

const Screen1 = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding2');
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={color.F_OnBoard} />
      <Image style={styles.image} source={require('../pic/logo.png')} />
      <Text style={styles.text}>Flora - Your Digital Garden</Text>
      <Text
        style={{
          fontFamily: 'Allura-Regular',
          fontSize: rfSpacing['26x'],
          fontWeight: '500',
          letterSpacing: rfSpacing['2x'],
          color: color.F_White,
          textAlign: 'center',
          verticalAlign: 'middle',
        }}>
        Guardian
      </Text>
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
    fontWeight: '500',
    letterSpacing: rfSpacing['2x'],
    color: color.F_White,
    marginTop: rfSpacing['2x'],
    textAlign: 'center',
    verticalAlign: 'middle',
  },
});
