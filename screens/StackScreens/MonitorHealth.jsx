import React, {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import rfSpacing from '../../src/Theme/rfSpacing';
import color from '../../src/Theme/color';
import {useNavigation} from '@react-navigation/native';
import {launchCamera} from 'react-native-image-picker';

const openCamera = () => {
  launchCamera({mediaType: 'photo'}, response => {
    console.log(response);
  });
};

const treatmentSteps = [
  {
    number: 1,
    title: 'Remove Affected Leaves',
    description:
      'Carefully remove all spotted leaves using sterilized pruning shears. Dispose of infected material away from healthy plants.',
  },
  {
    number: 2,
    title: 'Apply Fungicide',
    description:
      'Spray with copper-based fungicide or neem soil solution. Apply in early morning or evening to avoid leaf burn.',
  },
  {
    number: 3,
    title: 'Improve Air Circulation',
    description:
      'Maintain 12–18 inch spacing between plants for airflow; use fans or vents in enclosed spaces. Clear weeds and control humidity to prevent fungal diseases like leaf spot.',
  },
];

const DiseaseTabs = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Monitor');

  return (
    <View style={styles.cont}>
      <View style={styles.topcont}>
        <View style={styles.headerRow}>
          <Pressable
            onPress={() => navigation.navigate('Main', {screen: 'Home'})}>
            <Image
              style={styles.BackArrow}
              source={require('../pic/Pre.png')}
            />
          </Pressable>
          <Image style={styles.logo} source={require('../pic/logo.png')} />
          <Text style={styles.logoText}>Flora</Text>
        </View>
        <View style={styles.centerContainer}>
          <Text style={styles.title}>Disease Treatment</Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <View style={styles.tabsRow}>
          <Pressable
            style={[styles.tab, activeTab === 'Monitor' && styles.activeTab]}
            onPress={() => setActiveTab('Monitor')}>
            <Text
              style={
                activeTab === 'Monitor' ? styles.tabTextActive : styles.tabText
              }>
              Monitor
            </Text>
          </Pressable>
          <Pressable
            style={[styles.tab, activeTab === 'CareTips' && styles.activeTab]}
            onPress={() => setActiveTab('CareTips')}>
            <Text
              style={
                activeTab === 'CareTips' ? styles.tabTextActive : styles.tabText
              }>
              Care Tips
            </Text>
          </Pressable>
          <Pressable
            style={[styles.tab, activeTab === 'History' && styles.activeTab]}
            onPress={() => setActiveTab('History')}>
            <Text
              style={
                activeTab === 'History' ? styles.tabTextActive : styles.tabText
              }>
              History
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Content */}
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={styles.scrollContent}>
        {activeTab === 'Monitor' && (
          <>
            <View style={styles.card}>
              <Pressable onPress={openCamera} style={styles.captureBtn}>
                <Image
                  source={require('../pic/Cam2.png')}
                  style={styles.cameraIcon}
                />
              </Pressable>
              <Text style={styles.cardMainText}>
                Tap to capture or upload plant photo
              </Text>
              <Text style={styles.cardSubText}>
                We'll analyze your plant for diseases and pests
              </Text>
            </View>
            <View style={styles.tipsCard}>
              <View style={styles.tipsHeaderRow}>
                <Image
                  source={require('../pic/clipboard.png')}
                  style={styles.tipsIcon}
                />
                <Text style={styles.tipsTitle}>Tips for Better Analysis</Text>
              </View>
              <View style={{marginTop: rfSpacing['5x']}}>
                <View style={styles.tipRow}>
                  <Text style={styles.tipBullet}>{'\u2022'} </Text>
                  <Text style={styles.tipText}>
                    {' '}
                    Take photos in natural light
                  </Text>
                </View>
                <View style={styles.tipRow}>
                  <Text style={styles.tipBullet}>{'\u2022'} </Text>
                  <Text style={styles.tipText}> Focus on affected areas</Text>
                </View>
                <View style={styles.tipRow}>
                  <Text style={styles.tipBullet}>{'\u2022'} </Text>
                  <Text style={styles.tipText}>
                    {' '}
                    Include multiple leaves if possible
                  </Text>
                </View>
              </View>
            </View>
          </>
        )}
        {activeTab === 'CareTips' && (
          <>
            <View style={styles.alertCard}>
              <Image
                source={require('../pic/warning.png')}
                style={styles.alertIcon}
              />
              <View>
                <Text style={styles.alertTitle}>Leaf Spot Disease</Text>
                <Text style={styles.alertSubtitle}>
                  Immediate treatment recommended
                </Text>
              </View>
            </View>
            <View style={styles.stepsContainer}>
              <Text style={styles.stepsHeader}>Treatment Steps:</Text>
              {treatmentSteps.map(step => (
                <View key={step.number} style={styles.stepCard}>
                  <View style={styles.stepRow}>
                    <View style={styles.stepCircle}>
                      <Text style={styles.stepNum}>{step.number})</Text>
                    </View>
                    <Text style={styles.stepTitle}>{step.title}</Text>
                  </View>
                  <Text style={styles.stepDesc}>{step.description}</Text>
                </View>
              ))}
            </View>
          </>
        )}
        {activeTab === 'History' && (
          <View style={styles.historyCard}>
            <Text style={styles.historyText}>NO HISTORY</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default DiseaseTabs;

const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#E1EBC7',
    flex: 1,
  },
  topcont: {
    flexDirection: 'column',
    height: 120,
    backgroundColor: '#628A73',
    paddingHorizontal: rfSpacing['12x'],
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginLeft: rfSpacing['10x'],
  },
  logoText: {
    fontFamily: 'Alkalami-Regular',
    fontSize: rfSpacing['24x'],
    color: 'white',
    marginLeft: rfSpacing['10x'],
    fontWeight: '400',
  },
  centerContainer: {
    marginTop: rfSpacing['8x'],
  },
  title: {
    fontFamily: 'AbrilFatface-Regular',
    fontSize: 22,
    color: color.F_White,
    letterSpacing: rfSpacing['0.7x'],
    fontWeight: '400',
  },
  subtitle: {
    fontFamily: 'Adamina-Regular',
    fontSize: 15,
    fontWeight: '400',
    color: color.F_White,
    letterSpacing: rfSpacing['0.6x'],
    marginTop: rfSpacing['2x'],
  },
  tabsContainer: {
    marginTop: rfSpacing['17x'],
    marginBottom: rfSpacing['8x'],
    paddingHorizontal: rfSpacing['18x'],
  },
  tabsRow: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: rfSpacing['12x'],
    padding: rfSpacing['4x'],
    alignItems: 'center',
    gap: rfSpacing['8x'],
    elevation: 3,
  },
  tab: {
    paddingVertical: rfSpacing['6x'],
    paddingHorizontal: rfSpacing['18x'],
    borderRadius: rfSpacing['10x'],
    backgroundColor: '#FFF',
  },
  activeTab: {
    borderColor: '#628A73',
    borderWidth: 2,
    backgroundColor: '#F2F6EF',
  },
  tabText: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['16x'],
    color: '#628A73',
    fontWeight: '500',
  },
  tabTextActive: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['16x'],
    color: '#628A73',
    fontWeight: '600',
  },
  scrollContent: {
    paddingBottom: rfSpacing['20x'],
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: rfSpacing['20x'],
    marginHorizontal: rfSpacing['18x'],
    marginTop: rfSpacing['18x'],
    paddingVertical: rfSpacing['15x'],
    paddingHorizontal: rfSpacing['10x'],
    alignItems: 'center',
  },
  captureBtn: {
    borderRadius: rfSpacing['12x'],
    padding: rfSpacing['13x'],
    marginBottom: rfSpacing['10x'],
  },
  cameraIcon: {
    width: rfSpacing['34x'],
    height: rfSpacing['34x'],
  },
  cardMainText: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['17x'],
    color: color.F_Black,
    textAlign: 'center',
    marginTop: rfSpacing['3x'],
    fontWeight: '400',
  },
  cardSubText: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['15x'],
    color: color.F_InputContainer,
    textAlign: 'center',
    marginTop: rfSpacing['3x'],
    fontWeight: '400',
  },
  tipsCard: {
    backgroundColor: '#FFF',
    borderRadius: rfSpacing['13x'],
    marginHorizontal: rfSpacing['18x'],
    marginTop: rfSpacing['18x'],
    paddingVertical: rfSpacing['15x'],
    paddingHorizontal: rfSpacing['13x'],
    borderRadius: 12,
  },
  tipsHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rfSpacing['4x'],
    left: '4%',
  },
  tipsIcon: {
    width: rfSpacing['26x'],
    height: rfSpacing['26x'],
    marginRight: rfSpacing['8x'],
  },
  tipsTitle: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['17x'],
    fontWeight: '500',
    color: color.F_Black,
  },
  tipRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: rfSpacing['2x'],
    left: '5%',
  },
  tipBullet: {
    fontSize: rfSpacing['17x'],
    color: '#628A73',
    marginRight: rfSpacing['7x'],
    marginTop: 2,
  },
  tipText: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['15x'],
    color: color.F_Black,
  },
  alertCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8D7DA',
    borderRadius: rfSpacing['12x'],
    marginHorizontal: rfSpacing['18x'],
    marginTop: rfSpacing['12x'],
    paddingVertical: rfSpacing['13x'],
    paddingHorizontal: rfSpacing['10x'],
    borderColor: '#F5C2C7',
    borderWidth: 2.5,
    gap: rfSpacing['10x'],
    elevation: 2,
  },
  alertIcon: {
    width: rfSpacing['22x'],
    height: rfSpacing['22x'],
    marginRight: rfSpacing['9x'],
  },
  alertTitle: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['16x'],
    color: '#373737',
    fontWeight: '400',
  },
  alertSubtitle: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['15x'],
    color: '#7e7e7e',
    fontWeight: '400',
    marginTop: rfSpacing['2x'],
  },
  stepsContainer: {
    marginTop: rfSpacing['13x'],
    marginHorizontal: rfSpacing['18x'],
  },
  stepsHeader: {
    fontFamily: 'Adamina-Regular',
    fontWeight: '400',
    fontSize: rfSpacing['16x'],
    marginBottom: rfSpacing['9x'],
    color: color.F_Black,
  },
  stepCard: {
    backgroundColor: '#FFF',
    borderRadius: rfSpacing['10x'],
    marginBottom: rfSpacing['12x'],
    padding: rfSpacing['12x'],
    borderColor: '#3094EF',
    borderWidth: 1,
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rfSpacing['7x'],
  },
  stepCircle: {
    width: rfSpacing['29x'],
    height: rfSpacing['29x'],
    borderRadius: rfSpacing['20x'],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rfSpacing['10x'],
  },
  stepNum: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['19x'],
    color: '#000000',
    fontWeight: '700',
  },
  stepTitle: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['16x'],
    color: color.F_Black,
    fontWeight: '600',
  },
  stepDesc: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['15x'],
    color: '#5b5b5b',
    marginLeft: rfSpacing['2x'],
    marginTop: rfSpacing['1x'],
    lineHeight: rfSpacing['20x'],
  },
  historyCard: {
    backgroundColor: '#FFF',
    borderRadius: rfSpacing['20x'],
    marginHorizontal: rfSpacing['18x'],
    marginTop: rfSpacing['18x'],
    paddingVertical: rfSpacing['40x'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  historyText: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['19x'],
    color: '#5b5b5b',
    fontWeight: '600',
    textAlign: 'center',
  },
});
