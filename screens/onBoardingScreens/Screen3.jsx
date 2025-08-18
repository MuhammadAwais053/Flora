import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Login from '../StackScreens/Login';

const Screen3 = ({ navigation }) => {
  const onGestureEvent = (event) => {
    const { translationX } = event.nativeEvent;

    if (translationX > 50) {
      // Swipe right → go back to Screen2
      navigation.navigate('Onboarding2');
    }
  };

  return (
    <PanGestureHandler
      onGestureEvent={onGestureEvent}
      activeOffsetX={[-20, 20]}
    >
      <View style={styles.container}>
        <View>
          <Image
            style={{ width: 400, height: 330 }}
            source={require('../pic/On1.png')}
          />
        </View>
        <Text style={styles.text1}>Greenery Made Easy</Text>
        <Text
          style={{
            fontFamily: 'Alata-Regular',
            fontWeight: '400',
            textAlign: 'center',
            fontSize: 17,
            color: 'black',
            bottom: '2%',
          }}
        >
          Shop and Care in One Tap
        </Text>
        <Text style={styles.text2}>Curated by Experts</Text>
        <Image style={{ marginTop: 15 }} source={require('../pic/bar2.png')} />
        <Pressable style={styles.button}
        onPress={()=>{navigation.navigate("Register")}}
        >
          <Text style={styles.buttonText}>Signup</Text>
        </Pressable>
        <Text style={{color:'#919191', fontFamily:'Adamina-Regular', fontSize:12}}>
          By clicking you agree to terms and conditions
        </Text>
      </View>
    </PanGestureHandler>
  );
};

export default Screen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    alignItems: 'center',
  },
  text1: {
    fontFamily: 'Alata-Regular',
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 17,
    color: 'black',
    marginTop: '1%',
    padding: 20,
  },
  text2: {
    fontFamily: 'Sacramento-Regular',
    color: 'black',
    fontWeight: '400',
    fontSize: 24,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: 'white',
  },
  button: {
    backgroundColor: '#628A73',
    width: 328,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: '50%',
  },
});
