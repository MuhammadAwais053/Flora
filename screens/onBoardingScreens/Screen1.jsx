import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Screen1 = () => {
  const navigation = useNavigation();
  const onGestureEvent = (event) => {
    if (event.nativeEvent.translationX < -50) {
      navigation.navigate('Onboarding2');
    }
  };

  return (
    <PanGestureHandler
      onGestureEvent={onGestureEvent}
      activeOffsetX={[-20, 20]}
    >
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
      </View>
    </PanGestureHandler>
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
    textAlign:'center'
  }
});
