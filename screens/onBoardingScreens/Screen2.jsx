import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import rfSpacing from '../../src/Theme/rfSpacing';
import {useNavigation} from '@react-navigation/native';
import color from '../../src/Theme/color';

const Screen2 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          barStyle={'light-content'}
          backgroundColor={'transparent'}
        />

        <View style={{maxHeight: rfSpacing['330x'], maxWidth: 'auto'}}>
          <Image style={styles.image} source={require('../pic/On1.png')} />
        </View>
        <Text style={styles.text1}>Discover the Perfect Plants for Your</Text>
        <Text style={styles.text1}>Space Tailored to your home's light</Text>
        <Text style={styles.text2}>Your Perfect Plant Match</Text>
        <Image
          style={{marginTop: rfSpacing['15x']}}
          source={require('../pic/bar.png')}
        />

        <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
          <Image source={require('../pic/Pre.png')} style={styles.arrowIcon} />
        </Pressable>

        <Pressable
          style={styles.forwardArrow}
          onPress={() => navigation.navigate('Onboarding3')}>
          <Image
            source={require('../pic/arrow.png')}
            style={styles.arrowIcon}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: color.F_White,
    alignItems: 'center',
  },
  text1: {
    fontFamily: 'Alata-Regular',
    top: rfSpacing['20x'],
    fontWeight: '400',
    textAlign: 'center',
    verticalAlign: 'middle',
    fontSize: rfSpacing['17x'],
    color: color.F_Black,
    padding: rfSpacing['1x'],
    verticalAlign: 'middle',
  },
  text2: {
    fontFamily: 'Sacramento-Regular',
    color: color.F_Black,
    fontWeight: '400',
    fontSize: rfSpacing['24x'],
    textAlign: 'center',
    verticalAlign: 'middle',
    marginTop: rfSpacing['30x'],
  },
  backArrow: {
    position: 'absolute',
    bottom: rfSpacing['30x'],
    left: rfSpacing['30x'],
  },
  forwardArrow: {
    position: 'absolute',
    bottom: rfSpacing['30x'],
    right: rfSpacing['30x'],
  },
  arrowIcon: {
    width: rfSpacing['32x'],
    height: rfSpacing['32x'],
    tintColor: color.F_Black,
  },
  image: {
    flex: 1,
    width: rfSpacing['450x'],
  },
});
