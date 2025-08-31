import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import rfSpacing from '../../src/Theme/rfSpacing';
import {useNavigation} from '@react-navigation/native';
import color from '../../src/Theme/color';

const Screen2 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{width: rfSpacing['400x'], height: rfSpacing['330x']}}
          source={require('../pic/On1.png')}
        />
      </View>
      <Text style={styles.text1}>
        Discover the Perfect Plants for Your Space Tailored to your home's
        light, climate, and vibe
      </Text>
      <Text style={styles.text2}>Your Perfect Plant Match</Text>
      <Image
        style={{marginTop: rfSpacing['15x']}}
        source={require('../pic/bar.png')}
      />

      <Pressable
        style={styles.backArrow}
        onPress={() => navigation.navigate('Onboarding1')}>
        <Image source={require('../pic/Pre.png')} style={styles.arrowIcon} />
      </Pressable>

      <Pressable
        style={styles.forwardArrow}
        onPress={() => navigation.navigate('Onboarding3')}>
        <Image source={require('../pic/arrow.png')} style={styles.arrowIcon} />
      </Pressable>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: color.F_White,
    alignItems: 'center',
  },
  text1: {
    fontFamily: 'Alata-Regular',
    fontWeight: '400',
    textAlign: 'center',
    fontSize: rfSpacing['17x'],
    color: color.F_Black,
    marginTop: '1%',
    padding: rfSpacing['20x'],
  },
  text2: {
    fontFamily: 'Sacramento-Regular',
    color: color.F_Black,
    fontWeight: '400',
    fontSize: rfSpacing['24x'],
    textAlign: 'center',
  },
  backArrow: {
    position: 'absolute',
    bottom: rfSpacing['30x'],
    left: rfSpacing['30x'],
  },
  forwardArrow: {
    position: 'absolute',
    bottom: rfSpacing['30x'],
    right: rfSpacing['30x'],
  },
  arrowIcon: {
    width: rfSpacing['32x'],
    height: rfSpacing['32x'],
    tintColor: color.F_Black,
  },
});
