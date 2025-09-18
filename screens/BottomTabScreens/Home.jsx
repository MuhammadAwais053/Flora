import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import rfSpacing from '../../src/Theme/rfSpacing';
import color from '../../src/Theme/color';

const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: rfSpacing['120x'],
        paddingTop: StatusBar.currentHeight,
      }}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <View style={styles.headerContainer}>
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
            <View style={styles.careContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Care');
                }}>
                <Text style={styles.careText}>Get Care </Text>
                <Text style={styles.careText}>Recommendation</Text>
              </TouchableOpacity>
              <Image
                style={styles.careIcon}
                source={require('../pic/care.png')}
              />
            </View>
          </View>
          <View style={styles.cont}>
            <View style={styles.monitorContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Monitor');
                }}
                style={styles.monitorTouchable}>
                <Text style={styles.monitorText}>Monitor Plant Heath</Text>
              </TouchableOpacity>
              <Image
                style={styles.monitorIcon}
                source={require('../pic/c2.png')}
              />
            </View>
          </View>
        </View>
        <View style={styles.toolsHeaderContainer}>
          <Text style={styles.toolsHeaderText}>Care Tools:</Text>
        </View>
        <View style={styles.toolsContainer}>
          <View style={styles.cont2}>
            <Image
              style={[styles.toolIcon, styles.clockIcon]}
              source={require('../pic/clock.png')}
            />
            <Text style={styles.toolText}>Reminders</Text>
          </View>
          <View style={styles.cont2}>
            <Image
              style={styles.toolIcon}
              source={require('../pic/Meter.png')}
            />
            <Text style={styles.toolText}>Lightmeter</Text>
          </View>
          <View style={styles.cont2}>
            <Image
              style={[styles.toolIcon, styles.calculatorIcon]}
              source={require('../pic/watering-plants.png')}
            />
            <Text style={styles.toolText}>Calculator</Text>
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
    paddingHorizontal: rfSpacing['16x'],
  },
  headerContainer: {
    alignSelf: 'flex-start',
    paddingLeft: rfSpacing['22x'],
    marginTop: rfSpacing['14x'],
  },
  cont: {
    backgroundColor: color.F_Main,
    width: '100%',
    maxWidth: rfSpacing['350x'],
    minHeight: rfSpacing['143x'],
    borderRadius: rfSpacing['12x'],
    marginTop: rfSpacing['10x'],
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: rfSpacing['14x'],
  },
  cont2: {
    backgroundColor: color.F_Main,
    flex: 1,
    minWidth: rfSpacing['90x'],
    height: rfSpacing['106x'],
    borderRadius: rfSpacing['12x'],
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: rfSpacing['2x'],
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
    textAlign: 'left',
  },
  topcontainer: {
    width: '100%',
    alignItems: 'center',
  },
  container1Top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingTop: rfSpacing['10x'],
  },
  cont1Text: {
    fontFamily: 'AbhayaLibre-ExtraBold',
    fontSize: rfSpacing['24x'],
    fontWeight: '700',
    color: color.F_Black,
  },
  AddPlantContainer: {
    backgroundColor: color.F_White,
    width: '90%',
    height: rfSpacing['40x'],
    justifyContent: 'center',
    borderRadius: rfSpacing['12x'],
    marginTop: rfSpacing['10x'],
  },
  AddContainerWithText: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  addIcon: {
    width: rfSpacing['22x'],
    height: rfSpacing['22x'],
    marginRight: rfSpacing['8x'],
  },
  addPlantText: {
    fontFamily: 'AbhayaLibre-ExtraBold',
    fontSize: rfSpacing['24x'],
    color: color.F_Black,
    fontWeight: '500',
  },
  careContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: rfSpacing['17x'],
  },
  careText: {
    fontFamily: 'AbhayaLibre-ExtraBold',
    fontSize: rfSpacing['24x'],
    fontWeight: '700',
    color: color.F_Black,
  },
  careIcon: {
    width: rfSpacing['90x'],
    height: rfSpacing['90x'],
  },
  monitorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: rfSpacing['17x'],
  },
  monitorTouchable: {
    flex: 1,
  },
  monitorText: {
    fontFamily: 'AbhayaLibre-ExtraBold',
    fontSize: rfSpacing['24x'],
    fontWeight: '700',
    color: color.F_Black,
  },
  monitorIcon: {
    width: rfSpacing['90x'],
    height: rfSpacing['90x'],
  },
  toolsHeaderContainer: {
    alignSelf: 'flex-start',
    marginTop: rfSpacing['0.7x'],
    paddingLeft: rfSpacing['4x'],
  },
  toolsHeaderText: {
    fontFamily: 'Alkalami-Regular',
    fontWeight: '400',
    fontSize: rfSpacing['24x'],
    color: color.F_Black,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  toolsContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: rfSpacing['6x'],
    paddingHorizontal: rfSpacing['2x'],
    justifyContent: 'space-between',
    marginBottom: 'auto',
  },
  toolIcon: {
    width: rfSpacing['55x'],
    height: rfSpacing['55x'],
    marginBottom: rfSpacing['8x'],
  },
  clockIcon: {
    tintColor: '#628A73',
  },
  calculatorIcon: {
    width: rfSpacing['52x'],
    height: rfSpacing['52x'],
  },
  toolText: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['15x'],
    fontWeight: '700',
    color: color.F_Black,
    textAlign: 'center',
  },
});
