import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import rfSpacing from '../../src/Theme/rfSpacing';
import color from '../../src/Theme/color';

const NextQuestion = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedOption, setSelectedOption] = useState(null);

  const {selectedSymptom} = route.params || {};

  const handleOptionPress = option => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption) {
      navigation.navigate('Q3', {
        selectedSymptom,
        selectedFrequency: selectedOption,
      });
    }
  };

  const frequencyOptions = [
    {
      id: 1,
      name: 'Just Started',
      description: '(Within the last week)',
    },
    {
      id: 2,
      name: '1-2 Weeks',
      description: '(Noticed recently)',
    },
    {
      id: 3,
      name: '2-4 Weeks',
      description: '(Getting worse)',
    },
    {
      id: 4,
      name: 'Over a Month',
      description: '(Long term issue)',
    },
  ];

  const renderCard = option => (
    <Pressable
      key={option.id}
      onPress={() => handleOptionPress(option)}
      style={({pressed}) => [
        styles.card,
        selectedOption?.id === option.id && styles.selectedCard,
        pressed && styles.pressedCard,
      ]}>
      <Text style={styles.cardtext}>{option.name}</Text>
      <Text style={styles.cardtext}>{option.description}</Text>
    </Pressable>
  );

  return (
    <View style={styles.mainCont}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={color.F_OnBoard}
      />
      <View style={styles.topCont}>
        <View style={styles.logoCont}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              style={styles.BackArrow}
              source={require('../pic/Pre.png')}
            />
          </Pressable>
          <Image style={styles.logo} source={require('../pic/logo.png')} />
          <Text style={styles.logoText}>Flora</Text>
        </View>
        <Text style={styles.headingText}>Symptom Checker</Text>
        <Text style={styles.subHeading}>
          Help us diagnose your plant's condition
        </Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.QCon}>
          <Text style={styles.Qtext}>Question 2 of 5</Text>
          <Text style={styles.Q}>
            How long have you noticed these symptoms?
          </Text>
          <View style={styles.cardsContainer}>
            <View style={styles.cardRow}>
              {renderCard(frequencyOptions[0])}
              {renderCard(frequencyOptions[1])}
            </View>
            <View style={styles.cardRow}>
              {renderCard(frequencyOptions[2])}
              {renderCard(frequencyOptions[3])}
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Pressable
            style={styles.previousButton}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={styles.nextButtonText}>Previous</Text>
          </Pressable>
          <Pressable
            style={[
              styles.nextButton,
              !selectedOption && styles.disabledButton,
            ]}
            onPress={handleNext}
            disabled={!selectedOption}>
            <Text
              style={[
                styles.nextButtonText,
                !selectedOption && styles.disabledButtonText,
              ]}>
              Next
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default NextQuestion;

const styles = StyleSheet.create({
  mainCont: {
    backgroundColor: '#E1EBC7',
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  topCont: {
    flexDirection: 'column',
    height: 190,
    backgroundColor: '#628A73',
  },
  logoCont: {
    flexDirection: 'row',
    top: '2%',
  },
  BackArrow: {
    width: rfSpacing['30x'],
    height: rfSpacing['30x'],
    tintColor: 'white',
  },
  logo: {
    width: rfSpacing['33x'],
    height: rfSpacing['33x'],
    tintColor: 'white',
  },
  logoText: {
    fontFamily: 'Alkalami-Regular',
    fontSize: rfSpacing['24x'],
    color: 'white',
    bottom: '1.4%',
    left: '2.3%',
    fontWeight: '400',
  },
  headingText: {
    fontFamily: 'Adamina-Regular',
    fontSize: 20,
    left: '2%',
    fontWeight: '400',
    color: '#FFFBFB',
    letterSpacing: rfSpacing['0.7x'],
  },
  subHeading: {
    fontFamily: 'Adamina-Regular',
    fontSize: 16,
    left: '2%',
    fontWeight: '400',
    lineHeight: 100,
    color: color.F_White,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  QCon: {
    width: '100%',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderLeftColor: '#628A73',
    borderLeftWidth: 7,
    borderRadius: 25,
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  Qtext: {
    fontFamily: 'Adamina-Regular',
    fontSize: 15,
    fontWeight: '400',
    color: '#628A73',
    marginBottom: 10,
  },
  Q: {
    color: color.F_Black,
    fontFamily: 'Adamina-Regular',
    fontSize: 15,
    fontWeight: '400',
    marginBottom: 20,
  },
  cardsContainer: {
    gap: 15,
  },
  cardRow: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-evenly',
  },
  card: {
    width: 140,
    height: 180,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#628A73',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    backgroundColor: 'white',
  },
  selectedCard: {
    backgroundColor: '#E1EBC7',
    borderWidth: 2,
    borderColor: '#628A73',
  },
  pressedCard: {
    opacity: 0.7,
    transform: [{scale: 0.98}],
  },
  cardtext: {
    fontFamily: 'Adamina-Regular',
    color: color.F_Black,
    fontSize: 14,
    textAlign: 'center',
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#E1EBC7',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
  nextButton: {
    backgroundColor: '#628A73',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    width: '45%',
  },
  previousButton: {
    backgroundColor: '#ccc',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    width: '45%',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Adamina-Regular',
    fontWeight: '600',
  },
  disabledButtonText: {
    color: '#888',
  },
});
