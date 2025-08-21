import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import rfSpacing from '../../src/Theme/rfSpacing';

const Screen2 = ({navigation}) => {
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

      <TouchableOpacity
        style={styles.backArrow}
        onPress={() => navigation.navigate('Onboarding1')}>
        <Image source={require('../pic/Pre.png')} style={styles.arrowIcon} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.forwardArrow}
        onPress={() => navigation.navigate('Onboarding3')}>
        <Image source={require('../pic/arrow.png')} style={styles.arrowIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    alignItems: 'center',
  },
  text1: {
    fontFamily: 'Alata-Regular',
    fontWeight: '400',
    textAlign: 'center',
    fontSize: rfSpacing['17x'],
    color: 'black',
    marginTop: '1%',
    padding: rfSpacing['20x'],
  },
  text2: {
    fontFamily: 'Sacramento-Regular',
    color: 'black',
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
    tintColor: 'black',
  },
});
