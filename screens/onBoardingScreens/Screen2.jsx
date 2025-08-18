import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Screen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ width: 400, height: 330 }}
          source={require('../pic/On1.png')}
        />
      </View>
      <Text style={styles.text1}>
        Discover the Perfect Plants for Your Space Tailored to your home's light, climate, and vibe
      </Text>
      <Text style={styles.text2}>
        Your Perfect Plant Match
      </Text>
      <Image
        style={{ marginTop: 15 }}
        source={require('../pic/bar.png')}
      />

      <TouchableOpacity
        style={styles.backArrow}
        onPress={() => navigation.navigate('Onboarding1')}
      >
        <Image
          source={require('../pic/Pre.png')}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.forwardArrow}
        onPress={() => navigation.navigate('Onboarding3')}
      >
        <Image
          source={require('../pic/arrow.png')}
          style={styles.arrowIcon}
        />
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
    fontSize: 17,
    color: 'black',
    marginTop: '1%',
    padding: 20,
  },
  text2: {
    fontFamily: 'Sacramento-Regular',
    color: 'black',
    fontWeight: '400',
    fontSize: 24,
    textAlign: 'center',
  },
  backArrow: {
    position: 'absolute',
    bottom: 30,
    left: 30,
  },
  forwardArrow: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  arrowIcon: {
    width: 32,
    height: 32,
    tintColor: 'black',
  },
});
