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
    <View
      style={{
        backgroundColor: '#E1EBC7',
        flex: 1,
        gap: 10,
      }}>
      <View
        style={{
          flexDirection: 'column',
          width: 400,
          height: 190,
          backgroundColor: '#628A73',
        }}>
        <View style={{flexDirection: 'row', top: '2%'}}>
          <Pressable onPress={() => navigation.navigate('Main')}>
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
        <Text
          style={{
            fontFamily: 'Adamina-Regular',
            fontSize: 20,
            left: '2%',
            fontWeight: '400',
            color: '#FFFBFB',
            letterSpacing: rfSpacing['0.7x'],
          }}>
          Get Care Recommendations
        </Text>
        <Text
          style={{
            fontFamily: 'Adamina-Regular',
            fontSize: 16,
            left: '2%',
            fontWeight: '400',
            lineHeight: 100,
            color: color.F_White,
          }}>
          Let Flora help your plants thrive
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          top: '10%',
          gap: 15,
        }}>
        <View
          style={{
            flexDirection: 'column',
            width: 150,
            height: 195,
            backgroundColor: color.F_White,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#E1EBC7',
              width: 120,
              height: 80,
              borderRadius: 13,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Pressable onPress={openCamera}>
              <Image
                style={{width: 50, height: 50}}
                source={require('../pic/Cam2.png')}
              />
            </Pressable>
          </View>
          <Text style={styles.CardName}>Plant Scanner</Text>
          <Text style={styles.subTitle}>Identify Plants Instantly</Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            width: 150,
            height: 195,
            backgroundColor: color.F_White,
            borderRadius: 15,
          }}>
          <View
            style={{
              flexDirection: 'column',
              width: 150,
              height: 195,
              backgroundColor: color.F_White,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#E1EBC7',
                width: 120,
                height: 80,
                borderRadius: 13,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Pressable
                onPress={() => {
                  navigation.navigate('Checker');
                }}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                  }}
                  source={require('../pic/Seac.png')}
                />
              </Pressable>
            </View>
            <Text style={styles.CardName}>Symptom Checker</Text>
            <Text style={styles.subTitle}>Diagnose issues</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          top: '10%',
          gap: 15,
        }}>
        <View
          style={{
            flexDirection: 'column',
            width: 150,
            height: 195,
            backgroundColor: color.F_White,
            borderRadius: 15,
          }}>
          <View
            style={{
              flexDirection: 'column',
              width: 150,
              height: 195,
              backgroundColor: color.F_White,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#E1EBC7',
                width: 120,
                height: 80,
                borderRadius: 13,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Pressable
                onPress={() => {
                  navigation.navigate('Care Schedule');
                }}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                  }}
                  source={require('../pic/calendar.png')}
                />
              </Pressable>
            </View>
            <Text style={styles.CardName}>Care Schedule</Text>
            <Text style={styles.subTitle}>Set watering reminders</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'column',
            width: 150,
            height: 195,
            backgroundColor: color.F_White,
            borderRadius: 15,
          }}>
          <View
            style={{
              flexDirection: 'column',
              width: 150,
              height: 195,
              backgroundColor: color.F_White,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#E1EBC7',
                width: 120,
                height: 80,
                borderRadius: 13,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Pressable
                onPress={() => {
                  navigation.navigate('Expert Tips');
                }}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                  }}
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
  CardName: {
    color: color.F_Black,
    fontSize: 16,
    fontFamily: 'Adamina-Regular',
    fontWeight: '400',
    letterSpacing: 0.5,
    verticalAlign: 'middle',
  },
  subTitle: {
    color: color.F_Black,
    fontSize: 14,
    fontFamily: 'Adamina-Regular',
    fontWeight: '400',
    letterSpacing: 0.5,
    verticalAlign: 'middle',
    top: '2%',
  },
});
