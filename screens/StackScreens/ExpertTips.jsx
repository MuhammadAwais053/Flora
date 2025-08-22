import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import rfSpacing from '../../src/Theme/rfSpacing';
import color from '../../src/Theme/color';

const ExpertTips = () => {
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
          height: 120,
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
            fontSize: 24,
            left: '3%',
            fontWeight: '400',
            color: '#FFFBFB',
            letterSpacing: rfSpacing['0.7x'],
          }}>
          Expert Tips
        </Text>
      </View>
    </View>
  );
};

export default ExpertTips;

const styles = StyleSheet.create({});
