import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  StatusBar,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import rfSpacing from '../../src/Theme/rfSpacing';
import color from '../../src/Theme/color';

const PlantAdded = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {plantName} = route.params || {};

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <View style={{flexDirection: 'row', top: '2%'}}>
        <Image
          style={{
            width: rfSpacing['40x'],
            height: rfSpacing['40x'],
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
            fontWeight: '400',
          }}>
          Flora
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Plant Added Successfully </Text>
        <Text style={styles.subtitle}>
          Your new plant{' '}
          <Text style={{fontWeight: 'bold', color: '#344E41'}}>
            {plantName}
          </Text>{' '}
          has been saved!
        </Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Main')}>
        <Text style={styles.buttonText}>Go Back</Text>
      </Pressable>
    </View>
  );
};

export default PlantAdded;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.F_Main,
    paddingHorizontal: rfSpacing['15x'],
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  content: {
    alignItems: 'center',
    marginVertical: rfSpacing['20x'],
  },
  title: {
    fontSize: rfSpacing['28x'],
    fontFamily: 'AbhayaLibre-ExtraBold',
    color: '#344E41',
    marginBottom: rfSpacing['10x'],
  },
  subtitle: {
    fontSize: rfSpacing['18x'],
    fontFamily: 'Adamina-Regular',
    textAlign: 'center',
    color: color.F_Black,
  },
  buttonText: {
    fontSize: rfSpacing['20x'],
    fontWeight: 'bold',
    letterSpacing: 1,
    color: color.F_White,
  },
  button: {
    backgroundColor: '#628A73',
    width: rfSpacing['328x'],
    height: rfSpacing['48x'],
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: rfSpacing['8x'],
  },
});
