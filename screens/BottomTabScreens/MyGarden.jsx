import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import rfSpacing from '../../src/Theme/rfSpacing';
import color from '../../src/Theme/color';
import {useNavigation} from '@react-navigation/native';

const MyGarden = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.cont}>
      <View style={styles.topcont}>
        <View style={{flexDirection: 'row', gap: 2}}>
          <Pressable
            onPress={() => navigation.navigate('Main', {screen: 'Home'})}>
            <Image
              style={{
                width: rfSpacing['30x'],
                height: rfSpacing['30x'],
                tintColor: 'white',
              }}
              source={require('../pic/Pre.png')}
            />
          </Pressable>
          <Image
            style={{
              width: rfSpacing['33x'],
              height: rfSpacing['33x'],
              tintColor: 'white',
            }}
            source={require('../pic/logo.png')}
          />
          <Text
            style={{
              fontFamily: 'Alkalami-Regular',
              fontSize: rfSpacing['24x'],
              color: 'white',
              bottom: '1.4%',
              left: '2.3%',
              fontWeight: '400',
            }}>
            Flora
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text style={styles.Gardentext}>My Garden</Text>
        </View>
      </View>
    </View>
  );
};

export default MyGarden;

const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#E1EBC7',
    flex: 1,
  },
  topcont: {
    flexDirection: 'column',
    height: 120,
    backgroundColor: '#628A73',
  },
  Gardentext: {
    fontFamily: 'AbrilFatface-Regular',
    fontSize: 38,
    verticalAlign: 'middle',
    fontWeight: '400',
    color: color.F_White,
    letterSpacing: rfSpacing['0.7x'],
  },
});
