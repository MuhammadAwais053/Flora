import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import rfSpacing from '../../src/Theme/rfSpacing';
import color from '../../src/Theme/color';

const AddPlant = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', top: '2%'}}>
        <Pressable
          onPress={() => {
            navigation.navigate('Main');
          }}>
          <Image
            style={{width: rfSpacing['30x'], height: rfSpacing['30x']}}
            source={require('../pic/Pre.png')}
          />
        </Pressable>
        <Image
          style={{
            width: rfSpacing['33x'],
            height: rfSpacing['33x'],
            tintColor: 'black',
          }}
          source={require('../pic/logo.png')}
        />
        <Text
          style={{
            fontFamily: 'Alkalami-Regular',
            fontSize: rfSpacing['24x'],
            color: 'black',
            bottom: '1.4%',
            left: '2.3%',
            fontWeight: '400',
          }}>
          Flora
        </Text>
      </View>
      <View style={{alignSelf: 'center'}}>
        <Text
          style={{
            fontFamily: 'AbhayaLibre-ExtraBold',
            fontSize: rfSpacing['34x'],
            fontWeight: '400',
            color: 'black',
          }}>
          Add New Plant
        </Text>
      </View>
      <Text
        style={{
          fontFamily: 'AbhayaLibre-ExtraBold',
          fontWeight: '600',
          fontSize: rfSpacing['22x'],
          color: '#344E41',
        }}>
        Plant Identification
      </Text>
      <Text
        style={{
          fontFamily: 'Adamina-Regular',
          fontSize: rfSpacing['15x'],
          fontWeight: '500',
          lineHeight: rfSpacing['24x'],
          color: 'black',
        }}>
        Enter the plant name or take a photo
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'space-between',
          gap: rfSpacing['40x'],
          top: '5%',
          left: '1%',
        }}>
        <View
          style={{
            width: rfSpacing['130x'],
            height: rfSpacing['37x'],
            backgroundColor: color.F_OnBoard,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'space-between',
            borderRadius: rfSpacing['10x'],
          }}>
          <Text style={styles.text}>Manual</Text>
        </View>
        <View
          style={{
            width: rfSpacing['130x'],
            height: rfSpacing['37x'],
            backgroundColor: color.F_White,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'space-between',
            borderRadius: rfSpacing['10x'],
          }}>
          <Text style={styles.text}>Take Photo</Text>
        </View>
      </View>
    </View>
  );
};

export default AddPlant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.F_Main,
    paddingHorizontal: rfSpacing['15x'],
  },
  text: {
    fontFamily: 'Adamina-Regular',
    fontWeight: '400',
    fontSize: rfSpacing['15x'],
    color: 'black',
  },
});
