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
import {useNavigation} from '@react-navigation/native';
import rfSpacing from '../../src/Theme/rfSpacing';
import color from '../../src/Theme/color';

const SymptomChecker = () => {
  const navigation = useNavigation();
  const [selectedSymptom, setSelectedSymptom] = useState(null);

  const handleSymptomPress = symptom => {
    setSelectedSymptom(symptom);
  };

  const handleNext = () => {
    if (selectedSymptom) {
      navigation.navigate('Q2', {selectedSymptom});
    }
  };

  const symptoms = [
    {
      id: 1,
      name: 'Yellow Leaves',
      description: '(Leaves turning Yellow)',
      image: require('../pic/YellowEclipse.png'),
    },
    {
      id: 2,
      name: 'Dark Spots',
      description: '(Dark spot on leaves)',
      image: require('../pic/GreenEclipse.png'),
    },
    {
      id: 3,
      name: 'Wilting',
      description: '(Dropping leaves)',
      image: require('../pic/Wilting.png'),
    },
    {
      id: 4,
      name: 'Holes in leaves',
      description: '(Chewed or damaged)',
      image: require('../pic/C3.png'),
    },
    {
      id: 5,
      name: 'Leaf Curling',
      description: '(Leaves curling up)',
      image: require('../pic/leafcurl.png'),
    },
    {
      id: 6,
      name: 'Stunted Growth',
      description: '(Not Growth well)',
      image: require('../pic/c6.png'),
    },
  ];

  const renderCard = symptom => (
    <Pressable
      key={symptom.id}
      onPress={() => handleSymptomPress(symptom)}
      style={({pressed}) => [
        styles.card,
        selectedSymptom?.id === symptom.id && styles.selectedCard,
        pressed && styles.pressedCard,
      ]}>
      <Image
        source={symptom.image}
        style={{
          width: rfSpacing['60x'],
          height: rfSpacing['60x'],
        }}
      />
      <Text style={styles.cardtext}>{symptom.name}</Text>
      <Text style={styles.cardtext}>{symptom.description}</Text>
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
          <Text style={styles.Qtext}>Question 1 of 5</Text>
          <Text style={styles.Q}>What Symptoms are you seeing?</Text>
          <View style={styles.cardsContainer}>
            <View style={styles.cardRow}>
              {renderCard(symptoms[0])}
              {renderCard(symptoms[1])}
            </View>
            <View style={styles.cardRow}>
              {renderCard(symptoms[2])}
              {renderCard(symptoms[3])}
            </View>
            <View style={styles.cardRow}>
              {renderCard(symptoms[4])}
              {renderCard(symptoms[5])}
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Pressable
            style={[
              styles.nextButton,
              !selectedSymptom && styles.disabledButton,
            ]}
            onPress={handleNext}
            disabled={!selectedSymptom}>
            <Text
              style={[
                styles.nextButtonText,
                !selectedSymptom && styles.disabledButtonText,
              ]}>
              Next
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default SymptomChecker;

const styles = StyleSheet.create({
  mainCont: {
    backgroundColor: color.F_Main,
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  topCont: {
    flexDirection: 'column',
    height: rfSpacing['190x'],
    backgroundColor: color.F_OnBoard,
  },
  logoCont: {
    flexDirection: 'row',
    top: rfSpacing['8x'],
  },
  BackArrow: {
    width: rfSpacing['30x'],
    height: rfSpacing['30x'],
    tintColor: color.F_White,
  },
  logo: {
    width: rfSpacing['33x'],
    height: rfSpacing['33x'],
    tintColor: color.F_White,
  },
  logoText: {
    fontFamily: 'Alkalami-Regular',
    fontSize: rfSpacing['24x'],
    color: color.F_White,
    bottom: rfSpacing['5x'],
    left: rfSpacing['4x'],
    fontWeight: '400',
  },
  headingText: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['20x'],
    left: rfSpacing['9x'],
    fontWeight: '400',
    color: color.F_Subtitle,
    letterSpacing: rfSpacing['0.7x'],
  },
  subHeading: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['16x'],
    left: rfSpacing['9x'],
    fontWeight: '400',
    lineHeight: 100,
    color: color.F_White,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: rfSpacing['10x'],
    paddingBottom: rfSpacing['20x'],
  },
  QCon: {
    width: '100%',
    backgroundColor: color.F_White,
    alignSelf: 'center',
    borderLeftColor: color.F_OnBoard,
    borderLeftWidth: rfSpacing['7x'],
    borderRadius: rfSpacing['25x'],
    marginTop: rfSpacing['10x'],
    paddingVertical: rfSpacing['20x'],
    paddingHorizontal: rfSpacing['15x'],
  },
  Qtext: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['15x'],
    fontWeight: '400',
    color: color.F_OnBoard,
    marginBottom: rfSpacing['10x'],
  },
  Q: {
    color: color.F_Black,
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['15x'],
    fontWeight: '400',
    marginBottom: rfSpacing['20x'],
  },
  cardsContainer: {
    gap: rfSpacing['15x'],
  },
  cardRow: {
    flexDirection: 'row',
    gap: rfSpacing['10x'],
    justifyContent: 'space-evenly',
  },
  card: {
    width: rfSpacing['140x'],
    height: rfSpacing['180x'],
    borderRadius: rfSpacing['30x'],
    borderWidth: rfSpacing['1x'],
    borderColor: color.F_OnBoard,
    alignItems: 'center',
    justifyContent: 'center',
    gap: rfSpacing['1x'],
    backgroundColor: color.F_White,
  },
  selectedCard: {
    backgroundColor: color.F_Main,
    borderWidth: rfSpacing['1.5x'],
    borderColor: color.F_OnBoard,
  },
  pressedCard: {
    opacity: rfSpacing['0.7x'],
    transform: [{scale: rfSpacing['1x']}],
  },
  cardtext: {
    fontFamily: 'Adamina-Regular',
    color: color.F_Black,
    fontSize: rfSpacing['14x'],
    textAlign: 'center',
  },
  bottomContainer: {
    paddingHorizontal: rfSpacing['20x'],
    paddingVertical: rfSpacing['15x'],
    backgroundColor: color.F_Main,
  },
  nextButton: {
    backgroundColor: color.F_OnBoard,
    paddingVertical: rfSpacing['15x'],
    borderRadius: 12,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: color.F_LightText,
  },
  nextButtonText: {
    color: color.F_White,
    fontSize: rfSpacing['16x'],
    fontFamily: 'Adamina-Regular',
    fontWeight: '600',
  },
  disabledButtonText: {
    color: '#888',
  },
});
