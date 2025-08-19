import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

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
            style={{width: 30, height: 30}}
            source={require('../pic/Pre.png')}
          />
        </Pressable>
        <Image
          style={{width: 33, height: 33, tintColor: 'black'}}
          source={require('../pic/logo.png')}
        />
        <Text
          style={{
            fontFamily: 'Alkalami-Regular',
            fontSize: 24,
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
            fontSize: 34,
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
          fontSize: 22,
          color: '#344E41',
        }}>
        Plant Identification
      </Text>
      <Text
        style={{
          fontFamily: 'Adamina-Regular',
          fontSize: 15,
          fontWeight: '500',
          lineHeight: 24,
          color: 'black',
        }}>
        Enter the plant name or take a photo
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'space-between',
          gap: 40,
          top: '5%',
          left: '1%',
        }}>
        <View
          style={{
            width: 130,
            height: 37,
            backgroundColor: '#628A73',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'space-between',
            borderRadius: 10,
          }}>
          <Text style={styles.text}>Manual</Text>
        </View>
        <View
          style={{
            width: 130,
            height: 37,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'space-between',
            borderRadius: 10,
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
    backgroundColor: '#E1EBC7',
    paddingHorizontal: 15,
  },
  text: {
    fontFamily: 'Adamina-Regular',
    fontWeight: '400',
    fontSize: 15,
    color: 'black',
  },
});
