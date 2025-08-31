import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import rfSpacing from '../../src/Theme/rfSpacing';
import color from '../../src/Theme/color';

const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{alignSelf: 'flex-start', left: rfSpacing['9x']}}>
          <Text style={styles.text}>Let's make things bloom!</Text>
        </View>
        <View style={styles.topcontainer}>
          <View style={styles.cont}>
            <View style={styles.container1Top}>
              <Text style={styles.cont1Text}>Identify Your Plant</Text>
              <Image
                style={{width: rfSpacing['65x'], height: rfSpacing['50x']}}
                source={require('../pic/Camera.png')}
              />
            </View>
            <View style={styles.AddPlantContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Add Plant');
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    top: '2%',
                  }}>
                  <Image source={require('../pic/Add.png')} />
                  <Text
                    style={{
                      fontFamily: 'AbhayaLibre-ExtraBold',
                      fontSize: rfSpacing['24x'],
                      color: color.F_Black,
                      fontWeight: '500',
                    }}>
                    Add Plant
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.cont}>
            <View
              style={{
                flexDirection: 'row',
                alignContent: 'space-between',
                gap: rfSpacing['15x'],
                top: '5%',
                paddingHorizontal: rfSpacing['10x'],
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Care');
                }}>
                <Text
                  style={{
                    fontFamily: 'AbhayaLibre-ExtraBold',
                    fontSize: rfSpacing['24x'],
                    fontWeight: '700',
                    color: color.F_Black,
                    top: '18%',
                    lineHeight: rfSpacing['35x'],
                  }}>
                  Get Care Recommendation
                </Text>
              </TouchableOpacity>
              <Image
                style={{width: rfSpacing['90x'], height: rfSpacing['90x']}}
                source={require('../pic/care.png')}
              />
            </View>
          </View>
          <View style={styles.cont}>
            <View
              style={{
                flexDirection: 'row',
                alignContent: 'space-between',
                top: '8%',
                paddingHorizontal: rfSpacing['5x'],
                justifyContent: 'center',
                left: '4%',
              }}>
              <Text
                style={{
                  fontFamily: 'AbhayaLibre-ExtraBold',
                  fontSize: rfSpacing['24x'],
                  fontWeight: '700',
                  color: color.F_Black,
                  top: '5%',
                  lineHeight: rfSpacing['65x'],
                }}>
                Monitor Plant Heath
              </Text>
              <Image
                style={{width: rfSpacing['90x'], height: rfSpacing['90x']}}
                source={require('../pic/c2.png')}
              />
            </View>
          </View>
        </View>
        <View style={{alignSelf: 'flex-start', left: '9%', top: '3%'}}>
          <Text
            style={{
              fontFamily: 'Alkalami-Regular',
              fontWeight: '400',
              fontSize: rfSpacing['24x'],
              color: color.F_Black,
            }}>
            Care Tools:
          </Text>
        </View>

        <View style={{flexDirection: 'row', gap: rfSpacing['8x'], top: '2%'}}>
          <View style={styles.cont2}>
            <Image
              style={{
                width: rfSpacing['55x'],
                height: rfSpacing['55x'],
                tintColor: '#628A73',
                top: '4%',
              }}
              source={require('../pic/clock.png')}
            />
            <Text
              style={{
                fontFamily: 'Adamina-Regular',
                fontSize: rfSpacing['15x'],
                fontWeight: '600',
                color: color.F_Black,
                top: '6%',
              }}>
              Reminders
            </Text>
          </View>
          <View style={styles.cont2}>
            <Image
              style={{
                width: rfSpacing['55x'],
                height: rfSpacing['55x'],
                top: '6%',
              }}
              source={require('../pic/Meter.png')}
            />
            <Text
              style={{
                fontFamily: 'Adamina-Regular',
                fontSize: rfSpacing['15x'],
                fontWeight: '600',
                color: color.F_Black,
                top: '6%',
              }}>
              Lightmeter
            </Text>
          </View>
          <View style={styles.cont2}>
            <Image
              style={{
                width: rfSpacing['55x'],
                height: rfSpacing['55x'],
                top: '4%',
              }}
              source={require('../pic/watering-plants.png')}
            />
            <Text
              style={{
                fontFamily: 'Adamina-Regular',
                fontSize: rfSpacing['15x'],
                fontWeight: '600',
                color: color.F_Black,
                top: '6%',
              }}>
              Calculator
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  cont: {
    backgroundColor: color.F_Main,
    width: rfSpacing['307x'],
    height: rfSpacing['143x'],
    borderRadius: rfSpacing['12x'],
    top: rfSpacing['30x'],
    alignItems: 'center',
    alignSelf: 'center',
  },
  cont2: {
    backgroundColor: color.F_Main,
    width: rfSpacing['98x'],
    height: rfSpacing['92x'],
    borderRadius: rfSpacing['12x'],
    alignSelf: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['20x'],
    fontWeight: '600',
    color: color.F_MainText,
    top: '50%',
    textAlign: 'left',
  },
  topcontainer: {
    flexDirection: 'column',
    gap: rfSpacing['8x'],
  },
  container1Top: {
    flexDirection: 'row',
    alignContent: 'space-between',
    gap: rfSpacing['15x'],
    top: rfSpacing['20x'],
  },
  cont1Text: {
    fontFamily: 'AbhayaLibre-ExtraBold',
    fontSize: rfSpacing['24x'],
    fontWeight: '700',
    color: color.F_Black,
    top: '3%',
  },
  AddPlantContainer: {
    backgroundColor: color.F_White,
    width: rfSpacing['264x'],
    height: rfSpacing['40x'],
    alignContent: 'center',
    borderRadius: rfSpacing['12x'],
    top: '22%',
  },
});
