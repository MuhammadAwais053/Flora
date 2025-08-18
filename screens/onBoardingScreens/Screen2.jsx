import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { PanGestureHandler } from 'react-native-gesture-handler';

const Screen2 = ({ navigation }) => {
  const onGestureEvent = (event) => {
    const { translationX } = event.nativeEvent;

    if (translationX < -50) {
      // Swipe left → next screen
      navigation.navigate('Onboarding3');
    } else if (translationX > 50) {
      // Swipe right → previous screen
      navigation.navigate('Onboarding1');
    }
  };

  return (
    <PanGestureHandler
      onGestureEvent={onGestureEvent}
      activeOffsetX={[-20, 20]} // avoid accidental vertical scrolls
    >
      <View style={styles.container}>
        <View>
          <Image
            style={{ width: 400, height: 330 }}
            source={require('../pic/On1.png')}
          />
        </View>
        <Text style={styles.text1}>
          Discover the Perfect Plants for Your Space Tailored to your home's light, climate, and vibe
        </Text>
        <Text style={styles.text2}>
          Your Perfect Plant Match
        </Text>
        <Image
        style={{marginTop:15}}
        source={require('../pic/bar.png')}
        />
        {/* <Text style={{fontFamily:'Allura-Regular',fontSize:40,color:'black',top:'8%'}}>
          Swipe

        </Text> */}
        

      </View>
    </PanGestureHandler>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    alignItems:'center',
    
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
});
