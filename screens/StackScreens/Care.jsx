import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import rfSpacing from '../../src/Theme/rfSpacing';
import color from '../../src/Theme/color';
import {useNavigation} from '@react-navigation/native';
import {launchCamera} from 'react-native-image-picker';

const openCamera = () => {
  launchCamera({mediaType: 'photo'}, response => {
    console.log(response);
  });
};

const Care = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.topContainer}>
      <View style={styles.cont}>
        <View style={{flexDirection: 'row', top: rfSpacing['9x']}}>
          <Pressable onPress={() => navigation.navigate('Main')}>
            <Image
              style={styles.BackArrow}
              source={require('../pic/Pre.png')}
            />
          </Pressable>
          <Image style={styles.logo} source={require('../pic/logo.png')} />
          <Text style={styles.logoText}>Flora</Text>
        </View>
        <Text style={styles.headingText}>Get Care Recommendations</Text>
        <Text style={styles.subHeading}>Let Flora help your plants thrive</Text>
      </View>
      <View style={styles.topRowCont}>
        <View style={styles.containerOne}>
          <View style={styles.iconCont}>
            <Pressable onPress={openCamera}>
              <Image style={styles.icon} source={require('../pic/Cam2.png')} />
            </Pressable>
          </View>
          <Text style={styles.CardName}>Plant Scanner</Text>
          <Text style={styles.subTitle}>Identify Plants Instantly</Text>
        </View>
        <View style={styles.containerOne}>
          <View
            style={{
              flexDirection: 'column',
              width: rfSpacing['120x'],
              height: rfSpacing['195x'],
              backgroundColor: color.F_White,
              borderRadius: rfSpacing['15x'],
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={styles.iconCont}>
              <Pressable
                onPress={() => {
                  navigation.navigate('Checker');
                }}>
                <Image
                  style={styles.icon}
                  source={require('../pic/Seac.png')}
                />
              </Pressable>
            </View>
            <Text style={styles.CardName}>Symptom Checker</Text>
            <Text style={styles.subTitle}>Diagnose issues</Text>
          </View>
        </View>
      </View>
      <View style={styles.topRowCont}>
        <View style={styles.containerOne}>
          <View
            style={{
              flexDirection: 'column',
              width: rfSpacing['150x'],
              height: rfSpacing['195x'],
              backgroundColor: color.F_White,
              borderRadius: rfSpacing['15x'],
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={styles.iconCont}>
              <Pressable
                onPress={() => {
                  navigation.navigate('Care Schedule');
                }}>
                <Image
                  style={styles.icon}
                  source={require('../pic/calendar.png')}
                />
              </Pressable>
            </View>
            <Text style={styles.CardName}>Care Schedule</Text>
            <Text style={styles.subTitle}>Set watering reminders</Text>
          </View>
        </View>
        <View style={styles.containerOne}>
          <View
            style={{
              flexDirection: 'column',
              width: rfSpacing['150x'],
              height: rfSpacing['195x'],
              backgroundColor: color.F_White,
              borderRadius: rfSpacing['15x'],
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={styles.iconCont}>
              <Pressable
                onPress={() => {
                  navigation.navigate('Expert Tips');
                }}>
                <Image
                  style={styles.icon}
                  source={require('../pic/gardener.png')}
                />
              </Pressable>
            </View>
            <Text style={styles.CardName}>Expert Tips</Text>
            <Text style={styles.subTitle}>Professional guidance</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Care;

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: color.F_Main,
    flex: 1,
    gap: rfSpacing['12x'],
  },
  cont: {
    flexDirection: 'column',
    height: rfSpacing['170x'],
    backgroundColor: '#628A73',
  },
  BackArrow: {
    width: rfSpacing['30x'],
    height: rfSpacing['30x'],
    tintColor: color.F_White,
  },
  logo: {
    width: rfSpacing['33x'],
    height: rfSpacing['33x'],
    tintColor: color.F_White,
  },

  logoText: {
    fontFamily: 'Alkalami-Regular',
    fontSize: rfSpacing['24x'],
    color: color.F_White,
    bottom: rfSpacing['3x'],
    left: rfSpacing['6x'],
    fontWeight: '400',
  },
  headingText: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['20x'],
    left: rfSpacing['8x'],
    fontWeight: '400',
    color: color.F_Subtitle,
    letterSpacing: rfSpacing['0.7x'],
  },
  subHeading: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['16x'],
    left: rfSpacing['8x'],
    fontWeight: '400',
    lineHeight: rfSpacing['48x'],
    color: color.F_White,
  },
  topRowCont: {
    flexDirection: 'row',
    alignSelf: 'center',
    top: rfSpacing['45x'],
    gap: rfSpacing['15x'],
  },
  containerOne: {
    flexDirection: 'column',
    width: rfSpacing['150x'],
    height: rfSpacing['195x'],
    backgroundColor: color.F_White,
    borderRadius: rfSpacing['17x'],
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCont: {
    backgroundColor: color.F_Main,
    width: rfSpacing['120x'],
    height: rfSpacing['80x'],
    borderRadius: rfSpacing['13x'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: rfSpacing['50x'],
    height: rfSpacing['50x'],
  },
  CardName: {
    color: color.F_Black,
    fontSize: rfSpacing['16x'],
    fontFamily: 'Adamina-Regular',
    fontWeight: '400',
    letterSpacing: rfSpacing['0.5x'],
    verticalAlign: 'middle',
    textAlign: 'center',
  },
  subTitle: {
    color: color.F_Black,
    fontSize: rfSpacing['14x'],
    fontFamily: 'Adamina-Regular',
    fontWeight: '400',
    letterSpacing: rfSpacing['0.5x'],
    verticalAlign: 'middle',
    top: rfSpacing['7x'],
    textAlign: 'center',
  },
});
