import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
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
      <ScrollView>
        <View style={styles.QCon}>
          <Text style={styles.Qtext}>Question 1 of 5</Text>
          <Text style={styles.Q}>What Symptoms are you seeing?</Text>
          <View
            style={{
              gap: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                top: '3%',
                gap: 5,
                justifyContent: 'space-evenly',
              }}>
              <View style={styles.card}>
                <Image
                  source={require('../pic/YellowEclipse.png')}
                  style={{
                    width: 60,
                    height: 60,
                  }}
                />
                <Text style={styles.cardtext}>Yellow Leaves</Text>
                <Text style={styles.cardtext}>(Leaves turning Yellow)</Text>
              </View>
              <View style={styles.card}>
                <Image
                  source={require('../pic/GreenEclipse.png')}
                  style={{
                    width: 60,
                    height: 60,
                  }}
                />
                <Text style={styles.cardtext}>Dark Spots</Text>
                <Text style={styles.cardtext}>(Dark spot on leaves)</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                top: '3%',
                gap: 5,
                justifyContent: 'space-evenly',
              }}>
              <View style={styles.card}>
                <Image
                  source={require('../pic/Wilting.png')}
                  style={{
                    width: 60,
                    height: 60,
                  }}
                />
                <Text style={styles.cardtext}>Wilting</Text>
                <Text style={styles.cardtext}>(Dropping leaves)</Text>
              </View>
              <View style={styles.card}>
                <Image
                  source={require('../pic/C3.png')}
                  style={{
                    width: 60,
                    height: 60,
                  }}
                />
                <Text style={styles.cardtext}>Holes in leaves</Text>
                <Text style={styles.cardtext}>(Chewed or damaged)</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                top: '3%',
                gap: 5,
                justifyContent: 'space-evenly',
              }}>
              <View style={styles.card}>
                <Image
                  source={require('../pic/leafcurl.png')}
                  style={{
                    width: 60,
                    height: 60,
                  }}
                />
                <Text style={styles.cardtext}>Leaf Curling</Text>
                <Text style={styles.cardtext}>(Leaves curling up)</Text>
              </View>
              <View style={styles.card}>
                <Image
                  source={require('../pic/c6.png')}
                  style={{
                    width: 60,
                    height: 60,
                  }}
                />
                <Text style={styles.cardtext}>Stunted Growth</Text>
                <Text style={styles.cardtext}>(Not Growth well)</Text>
              </View>
            </View>
          </View>
          <View
            style={{flexDirection: 'row', left: '2.5%', top: '5%', gap: 10}}>
            <Pressable style={styles.previousButton}>
              <Text style={styles.pBtext}>Previous</Text>
            </Pressable>
            <Pressable style={styles.nextButton}>
              <Text>Next</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SymptomChecker;

const styles = StyleSheet.create({
  QCon: {
    width: 310,
    height: 740,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderLeftColor: '#628A73',
    borderLeftWidth: 7,
    borderRadius: 25,
    top: '1.5%',
    marginBottom: '10%',
    justifyContent: 'center',
  },
  cardtext: {
    fontFamily: 'Adamina-Regular',
    color: color.F_Black,
    fontSize: 14,
  },
  Qtext: {
    fontFamily: 'Adamina-Regular',
    fontSize: 15,
    fontWeight: '400',
    verticalAlign: 'middle',
    color: '#628A73',
    lineHeight: 50,
    left: '3%',
  },
  Q: {
    color: color.F_Black,
    fontFamily: 'Adamina-Regular',
    fontSize: 15,
    fontWeight: '400',
    left: '3%',
  },
  card: {
    color: '#F6F4F4C2',
    width: 130,
    height: 190,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#628A73',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  previousButton: {
    width: 125,
    height: 50,
    borderRadius: 20,
    borderColor: '#628A73',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pBtext: {
    fontFamily: 'Adamina-Regular',
    fontWeight: '400',
    fontSize: 12,
    color: '#628A73',
    verticalAlign: 'middle',
  },
  nextButton: {
    width: 125,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#628A73B2',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
