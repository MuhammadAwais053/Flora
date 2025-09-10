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
      <View style={{alignSelf: 'flex-start', left: rfSpacing['22x']}}>
        <Text style={styles.text}>Let's make things bloom!</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.topcontainer}>
          <View style={styles.cont}>
            <View style={styles.container1Top}>
              <Text style={styles.cont1Text}>Identify Your Plant</Text>
              <Image
                style={styles.camIcon}
                source={require('../pic/Cam2.png')}
              />
            </View>
            <View style={styles.AddPlantContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Add Plant');
                }}>
                <View style={styles.AddContainerWithText}>
                  <Image
                    style={styles.addIcon}
                    source={require('../pic/Add.png')}
                  />
                  <Text style={styles.addPlantText}>Add Plant</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.cont}>
            <View
              style={{
                flexDirection: 'row',
                gap: rfSpacing['15x'],
                top: rfSpacing['10x'],
                paddingHorizontal: rfSpacing['10x'],
                justifyContent: 'center',
                left: rfSpacing['5x'],
                alignItems: 'center',
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
                    top: rfSpacing['12x'],
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
                top: rfSpacing['10x'],
                paddingHorizontal: rfSpacing['20x'],
                justifyContent: 'center',
                left: rfSpacing['15x'],
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Monitor');
                }}
                style={{top: rfSpacing['5x'], left: rfSpacing['5x']}}>
                <Text
                  style={{
                    fontFamily: 'AbhayaLibre-ExtraBold',
                    fontSize: rfSpacing['24x'],
                    fontWeight: '700',
                    color: color.F_Black,
                    top: rfSpacing['5x'],
                    lineHeight: rfSpacing['65x'],
                  }}>
                  Monitor Plant Heath
                </Text>
              </TouchableOpacity>

              <Image
                style={{width: rfSpacing['90x'], height: rfSpacing['90x']}}
                source={require('../pic/c2.png')}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            alignSelf: 'flex-start',
            left: rfSpacing['20x'],
            top: rfSpacing['19x'],
          }}>
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

        <View
          style={{
            flexDirection: 'row',
            gap: rfSpacing['8x'],
            top: rfSpacing['10x'],
          }}>
          <View style={styles.cont2}>
            <Image
              style={{
                width: rfSpacing['55x'],
                height: rfSpacing['55x'],
                tintColor: '#628A73',
                top: rfSpacing['8x'],
              }}
              source={require('../pic/clock.png')}
            />
            <Text
              style={{
                fontFamily: 'Adamina-Regular',
                fontSize: rfSpacing['15x'],
                fontWeight: '600',
                color: color.F_Black,
                top: rfSpacing['10x'],
              }}>
              Reminders
            </Text>
          </View>
          <View style={styles.cont2}>
            <Image
              style={{
                width: rfSpacing['55x'],
                height: rfSpacing['55x'],
                top: rfSpacing['8x'],
              }}
              source={require('../pic/Meter.png')}
            />
            <Text
              style={{
                fontFamily: 'Adamina-Regular',
                fontSize: rfSpacing['15x'],
                fontWeight: '600',
                color: color.F_Black,
                top: rfSpacing['10x'],
              }}>
              Lightmeter
            </Text>
          </View>
          <View style={styles.cont2}>
            <Image
              style={{
                width: rfSpacing['52x'],
                height: rfSpacing['52x'],
                top: rfSpacing['8x'],
              }}
              source={require('../pic/watering-plants.png')}
            />
            <Text
              style={{
                fontFamily: 'Adamina-Regular',
                fontSize: rfSpacing['15x'],
                fontWeight: '600',
                color: color.F_Black,
                top: rfSpacing['10x'],
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
    gap: rfSpacing['11x'],
  },
  cont2: {
    backgroundColor: color.F_Main,
    width: rfSpacing['97x'],
    height: rfSpacing['106x'],
    borderRadius: rfSpacing['12x'],
    alignSelf: 'center',
    alignItems: 'center',
  },
  camIcon: {
    width: rfSpacing['65x'],
    height: rfSpacing['60x'],
  },
  text: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['20x'],
    fontWeight: '600',
    color: color.F_MainText,
    top: rfSpacing['22x'],
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
    top: rfSpacing['8x'],
  },
  AddPlantContainer: {
    backgroundColor: color.F_White,
    width: rfSpacing['264x'],
    height: rfSpacing['40x'],
    alignContent: 'center',
    borderRadius: rfSpacing['12x'],
    top: rfSpacing['15x'],
  },
  AddContainerWithText: {
    flexDirection: 'row',
    alignSelf: 'center',
    top: rfSpacing['5x'],
  },
  addIcon: {
    width: 22,
    height: 22,
    top: rfSpacing['2x'],
  },
  addPlantText: {
    fontFamily: 'AbhayaLibre-ExtraBold',
    fontSize: rfSpacing['24x'],
    color: color.F_Black,
    fontWeight: '500',
  },
});
