import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import rfSpacing from '../../src/Theme/rfSpacing';
import color from '../../src/Theme/color';

const Q5 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {selectedSymptom, selectedFrequency, selectedLocation} =
    route.params || {};

  const handleSubmit = () => {
    Alert.alert(
      'Confirm Submission',
      'Are you sure you want to submit your plant diagnosis request? Please review your responses below.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Submit',
          onPress: () => processSubmission(),
        },
      ],
    );
  };

  const processSubmission = async () => {
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      Alert.alert(
        'Success!',
        'Your plant diagnosis has been submitted successfully. Our experts will analyze your plant and provide recommendations.',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Care'),
          },
        ],
      );
    }, 1000);
  };

  const renderSummaryCard = (title, selectedItem) => (
    <View style={styles.summaryCard}>
      <Text style={styles.summaryTitle}>{title}</Text>
      <Text style={styles.summaryValue}>
        {selectedItem?.name || 'Not selected'}
      </Text>
      {selectedItem?.description && (
        <Text style={styles.summaryDescription}>
          {selectedItem.description}
        </Text>
      )}
    </View>
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
          <Text style={styles.Qtext}>Question 5 of 5</Text>
          <Text style={styles.Q}>Review Your Responses</Text>
          <Text style={styles.reviewText}>
            Please review the information below before submitting:
          </Text>

          <View style={styles.summaryContainer}>
            {renderSummaryCard('Symptom Type', selectedSymptom)}
            {renderSummaryCard('Frequency', selectedFrequency)}
            {renderSummaryCard('Plant Location', selectedLocation)}
            {renderSummaryCard(
              'Severity Level',
              route.params?.selectedSeverity,
            )}
          </View>

          <View style={styles.noteContainer}>
            <Text style={styles.noteTitle}>What happens next?</Text>
            <Text style={styles.noteText}>
              • Our plant experts will analyze your responses{'\n'}• You'll
              receive a detailed diagnosis report{'\n'}• Treatment
              recommendations will be provided{'\n'}• Follow-up care
              instructions included
            </Text>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <Pressable
            style={styles.previousButton}
            onPress={() => navigation.goBack()}>
            <Text style={styles.nextButtonText}>Previous</Text>
          </Pressable>

          <Pressable
            style={[styles.nextButton, isSubmitting && styles.disabledButton]}
            onPress={handleSubmit}
            disabled={isSubmitting}>
            <Text
              style={[
                styles.nextButtonText,
                isSubmitting && styles.disabledButtonText,
              ]}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default Q5;

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
    marginBottom: 15,
  },
  reviewText: {
    color: color.F_Black,
    fontFamily: 'Adamina-Regular',
    fontSize: 14,
    marginBottom: 20,
    lineHeight: 20,
  },
  summaryContainer: {
    gap: 15,
    marginBottom: 20,
  },
  summaryCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 15,
    padding: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#628A73',
  },
  summaryTitle: {
    fontFamily: 'Adamina-Regular',
    fontSize: 14,
    fontWeight: '600',
    color: '#628A73',
    marginBottom: 5,
  },
  summaryValue: {
    fontFamily: 'Adamina-Regular',
    fontSize: 16,
    fontWeight: '400',
    color: color.F_Black,
    marginBottom: 3,
  },
  summaryDescription: {
    fontFamily: 'Adamina-Regular',
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
  noteContainer: {
    backgroundColor: '#E1EBC7',
    borderRadius: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: '#628A73',
  },
  noteTitle: {
    fontFamily: 'Adamina-Regular',
    fontSize: 16,
    fontWeight: '600',
    color: '#628A73',
    marginBottom: 10,
  },
  noteText: {
    fontFamily: 'Adamina-Regular',
    fontSize: 14,
    color: color.F_Black,
    lineHeight: 20,
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
