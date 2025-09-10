import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import rfSpacing from '../../src/Theme/rfSpacing';
import color from '../../src/Theme/color';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.cont}>
      <View style={styles.topcont}>
        <View style={{flexDirection: 'row', top: rfSpacing['9x']}}>
          <Pressable
            onPress={() => navigation.navigate('Main', {screen: 'Home'})}>
            <Image
              style={{
                width: rfSpacing['30x'],
                height: rfSpacing['30x'],
                tintColor: color.F_White,
              }}
              source={require('../pic/Pre.png')}
            />
          </Pressable>
          <Image
            style={{
              width: rfSpacing['33x'],
              height: rfSpacing['33x'],
              tintColor: color.F_White,
            }}
            source={require('../pic/logo.png')}
          />
          <Text
            style={{
              fontFamily: 'Alkalami-Regular',
              fontSize: rfSpacing['24x'],
              color: color.F_White,
              bottom: rfSpacing['3x'],
              left: rfSpacing['6x'],
              fontWeight: '400',
            }}>
            Flora
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text style={styles.Gardentext}>Muhammad Awais</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  cont: {
    backgroundColor: color.F_Main,
    flex: 1,
  },
  topcont: {
    flexDirection: 'column',
    height: rfSpacing['120x'],
    backgroundColor: color.F_OnBoard,
  },
  Gardentext: {
    fontFamily: 'AbrilFatface-Regular',
    fontSize: rfSpacing['32x'],
    verticalAlign: 'middle',
    fontWeight: '500',
    color: color.F_White,
    letterSpacing: rfSpacing['0.7x'],
  },
});
