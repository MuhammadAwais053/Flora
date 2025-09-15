import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import rfSpacing from '../../src/Theme/rfSpacing';
import color from '../../src/Theme/color';

const Screen3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageCont}>
        <Image style={styles.image} source={require('../pic/On1.png')} />
      </View>
      <Text style={styles.text1}>
        Greenery Made Easy Shop and Care in One Tap
      </Text>
      <Text style={styles.text2}>Curated by Experts</Text>
      <Image
        style={{marginTop: rfSpacing['15x']}}
        source={require('../pic/bar2.png')}
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate('Register');
        }}>
        <Text style={styles.buttonText}>Signup</Text>
      </Pressable>
    </View>
  );
};

export default Screen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: color.F_White,
    alignItems: 'center',
  },
  imageCont: {
    maxHeight: rfSpacing['330x'],
    maxWidth: 'auto',
  },
  text1: {
    fontFamily: 'Alata-Regular',
    fontWeight: '400',
    textAlign: 'center',
    fontSize: rfSpacing['17x'],
    color: color.F_Black,
    marginTop: rfSpacing['2x'],
    padding: rfSpacing['20x'],
    verticalAlign: 'middle',
  },
  text2: {
    fontFamily: 'Sacramento-Regular',
    color: color.F_Black,
    fontWeight: '400',
    fontSize: rfSpacing['24x'],
    textAlign: 'center',
  },
  buttonText: {
    fontSize: rfSpacing['20x'],
    fontWeight: 'bold',
    letterSpacing: 1,
    color: color.F_White,
  },
  button: {
    backgroundColor: '#628A73',
    width: rfSpacing['328x'],
    height: rfSpacing['48x'],
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: rfSpacing['8x'],
    marginTop: 'auto',
    marginBottom: rfSpacing['22x'],
  },
  image: {
    flex: 1,
    width: rfSpacing['420x'],
  },
});
