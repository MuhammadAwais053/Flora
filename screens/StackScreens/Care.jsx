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
        backgroundColor: color.F_Main,
        flex: 1,
        gap: rfSpacing['10x'],
      }}>
      <View
        style={{
          flexDirection: 'column',
          width: rfSpacing['400x'],
          height: rfSpacing['170x'],
          backgroundColor: color.F_OnBoard,
        }}>
        <View style={{flexDirection: 'row', top: rfSpacing['9x']}}>
          <Pressable onPress={() => navigation.navigate('Main')}>
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
        <Text
          style={{
            fontFamily: 'Adamina-Regular',
            fontSize: rfSpacing['20x'],
            left: rfSpacing['8x'],
            fontWeight: '400',
            color: color.F_Subtitle,
            letterSpacing: rfSpacing['0.7x'],
          }}>
          Get Care Recommendations
        </Text>
        <Text
          style={{
            fontFamily: 'Adamina-Regular',
            fontSize: rfSpacing['16x'],
            left: rfSpacing['8x'],
            fontWeight: '400',
            lineHeight: rfSpacing['48x'],
            color: color.F_White,
          }}>
          Let Flora help your plants thrive
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          top: rfSpacing['45x'],
          gap: rfSpacing['15x'],
        }}>
        <View
          style={{
            flexDirection: 'column',
            width: rfSpacing['150x'],
            height: rfSpacing['195x'],
            backgroundColor: color.F_White,
            borderRadius: rfSpacing['17x'],
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: color.F_Main,
              width: rfSpacing['120x'],
              height: rfSpacing['80x'],
              borderRadius: rfSpacing['13x'],
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Pressable onPress={openCamera}>
              <Image
                style={{width: rfSpacing['50x'], height: rfSpacing['50x']}}
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
            width: rfSpacing['150x'],
            height: rfSpacing['195x'],
            backgroundColor: color.F_White,
            borderRadius: rfSpacing['15x'],
          }}>
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
            <View
              style={{
                backgroundColor: color.F_Main,
                width: rfSpacing['120x'],
                height: rfSpacing['80x'],
                borderRadius: rfSpacing['13x'],
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Pressable
                onPress={() => {
                  navigation.navigate('Checker');
                }}>
                <Image
                  style={{
                    width: rfSpacing['50x'],
                    height: rfSpacing['50x'],
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
          top: rfSpacing['45x'],
          gap: rfSpacing['15x'],
        }}>
        <View
          style={{
            flexDirection: 'column',
            width: rfSpacing['150x'],
            height: rfSpacing['195x'],
            backgroundColor: color.F_White,
            borderRadius: rfSpacing['15x'],
          }}>
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
            <View
              style={{
                backgroundColor: color.F_Main,
                width: rfSpacing['120x'],
                height: rfSpacing['80x'],
                borderRadius: rfSpacing['13x'],
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Pressable
                onPress={() => {
                  navigation.navigate('Care Schedule');
                }}>
                <Image
                  style={{
                    width: rfSpacing['50x'],
                    height: rfSpacing['50x'],
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
            width: rfSpacing['150x'],
            height: rfSpacing['195x'],
            backgroundColor: color.F_White,
            borderRadius: rfSpacing['15x'],
          }}>
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
            <View
              style={{
                backgroundColor: color.F_Main,
                width: rfSpacing['120x'],
                height: rfSpacing['80x'],
                borderRadius: rfSpacing['13x'],
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Pressable
                onPress={() => {
                  navigation.navigate('Expert Tips');
                }}>
                <Image
                  style={{
                    width: rfSpacing['50x'],
                    height: rfSpacing['50x'],
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
