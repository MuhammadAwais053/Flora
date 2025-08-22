import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import rfSpacing from '../../src/Theme/rfSpacing';
import color from '../../src/Theme/color';

const SymptomChecker = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: '#E1EBC7',
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'column',
          width: 400,
          height: 190,
          backgroundColor: '#628A73',
        }}>
        <View style={{flexDirection: 'row', top: '2%'}}>
          <Pressable onPress={() => navigation.navigate('Care')}>
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
          Symptom Checker
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
          Help us diagnose your plant's condition
        </Text>
      </View>
    </View>
  );
};

export default SymptomChecker;

const styles = StyleSheet.create({});
