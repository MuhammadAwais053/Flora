import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Screen1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../pic/logo.png')}
      />
      <Text style={styles.text}>
        Flora - Your Digital Garden 
      </Text>
      <Text style={styles.text}>
        Guardian
      </Text>

      <TouchableOpacity
        style={styles.arrowBtn}
        onPress={() => navigation.navigate('Onboarding2')}
      >
        <Image
          source={require('../pic/arrow.png')}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#628A73'
  },
  image: {
    width: 56,
    height: 56,
  },
  text: {
    fontFamily: 'Allura-Regular',
    fontSize: 26,
    fontWeight: '400',
    letterSpacing: 1,
    color: 'white',
    marginTop: '1%',
    textAlign: 'center'
  },
  arrowBtn: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  arrowIcon: {
    width: 32,
    height: 32,
    tintColor: 'white',
  }
});
