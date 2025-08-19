import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={{alignSelf: 'flex-start', left: '9%'}}>
        <Text style={styles.text}>Let's make things bloom!</Text>
      </View>
      <View style={{flexDirection: 'column', gap: 8}}>
        <View style={styles.cont}>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'space-between',
              gap: 15,
              top: '5%',
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontFamily: 'AbhayaLibre-ExtraBold',
                fontSize: 24,
                fontWeight: '800',
                color: 'black',
                top: '3%',
              }}>
              Identify Your Plant
            </Text>
            <Image
              style={{width: 65, height: 50}}
              source={require('../pic/Camera.png')}
            />
          </View>
          <View
            style={{
              backgroundColor: '#fff',
              width: 264,
              height: 40,
              alignContent: 'center',
              borderRadius: 12,
              top: '22%',
            }}>
            <View
              style={{flexDirection: 'row', alignSelf: 'center', top: '2%'}}>
              <Image source={require('../pic/Add.png')} />
              <Text
                style={{
                  fontFamily: 'AbhayaLibre-ExtraBold',
                  fontSize: 24,
                  color: 'black',
                  fontWeight: '500',
                }}>
                Add Plant
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.cont}>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'space-between',
              gap: 15,
              top: '5%',
              paddingHorizontal: 10,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'AbhayaLibre-ExtraBold',
                fontSize: 24,
                fontWeight: '800',
                color: 'black',
                top: '5.2%',
              }}>
              Get Care Recommendation
            </Text>
            <Image
              style={{width: 90, height: 90}}
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
              paddingHorizontal: 5,
              justifyContent: 'center',
              left: '4%',
            }}>
            <Text
              style={{
                fontFamily: 'AbhayaLibre-ExtraBold',
                fontSize: 24,
                fontWeight: '800',
                color: 'black',
                top: '5%',
              }}>
              Monitor Plant Heath
            </Text>
            <Image
              style={{width: 90, height: 90}}
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
            fontSize: 24,
            color: '#000',
          }}>
          Care Tools
        </Text>
      </View>

      <View style={{flexDirection: 'row', gap: 8, top: '2%'}}>
        <View style={styles.cont2}>
          <Image
            style={{width: 55, height: 55, tintColor: '#628A73', top: '4%'}}
            source={require('../pic/clock.png')}
          />
          <Text
            style={{
              fontFamily: 'Adamina-Regular',
              fontSize: 15,
              fontWeight: '600',
              color: 'black',
              top: '6%',
            }}>
            Reminders
          </Text>
        </View>
        <View style={styles.cont2}>
          <Image
            style={{width: 55, height: 55, top: '6%'}}
            source={require('../pic/Meter.png')}
          />
          <Text
            style={{
              fontFamily: 'Adamina-Regular',
              fontSize: 15,
              fontWeight: '600',
              color: 'black',
              top: '6%',
            }}>
            Lightmeter
          </Text>
        </View>
        <View style={styles.cont2}>
          <Image
            style={{width: 55, height: 55, top: '4%'}}
            source={require('../pic/watering-plants.png')}
          />
          <Text
            style={{
              fontFamily: 'Adamina-Regular',
              fontSize: 15,
              fontWeight: '600',
              color: 'black',
              top: '6%',
            }}>
            Calulator
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  cont: {
    backgroundColor: '#E1EBC7',
    width: 307,
    height: 143,
    borderRadius: 12,
    top: 30,
    alignItems: 'center',
  },
  cont2: {
    backgroundColor: '#E1EBC7',
    width: 98,
    height: 92,
    borderRadius: 12,
    alignSelf: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Adamina-Regular',
    fontSize: 20,
    fontWeight: '400',
    color: '#2C513F',
    top: '50%',
    textAlign: 'left',
  },
});
