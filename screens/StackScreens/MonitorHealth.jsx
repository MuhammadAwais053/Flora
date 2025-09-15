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
      'Maintain 12-18 inch spacing between plants for airflow; use fans or vents in enclosed spaces. Clear weeds and control humidity to prevent fungal diseases like leaf spot.',
  },
];

const DiseaseTabs = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Monitor');

  return (
    <View style={styles.cont}>
      <View style={styles.topcont}>
        <View style={styles.headerRow}>
          <Pressable onPress={() => navigation.goBack()}>
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
    backgroundColor: color.F_Main,
    flex: 1,
  },
  topcont: {
    flexDirection: 'column',
    height: rfSpacing['120x'],
    backgroundColor: '#628A73',
  },
  headerRow: {
    flexDirection: 'row',
    top: rfSpacing['9x'],
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
    bottom: rfSpacing['3x'],
    left: rfSpacing['6x'],
    fontWeight: '400',
  },
  centerContainer: {
    marginTop: rfSpacing['8x'],
    alignItems: 'center',
  },
  title: {
    fontFamily: 'AbrilFatface-Regular',
    fontSize: rfSpacing['25x'],
    verticalAlign: 'middle',
    fontWeight: '400',
    color: color.F_White,
    letterSpacing: rfSpacing['0.7x'],
  },
  subtitle: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['15x'],
    fontWeight: '400',
    color: color.F_White,
    letterSpacing: rfSpacing['0.6x'],
    marginTop: rfSpacing['2x'],
  },
  tabsContainer: {
    marginTop: rfSpacing['17x'],
    flex: 0,
    paddingHorizontal: rfSpacing['12x'],
  },
  tabsRow: {
    flexDirection: 'row',
    backgroundColor: color.F_White,
    borderRadius: rfSpacing['12x'],
    padding: rfSpacing['4x'],
    alignItems: 'center',
    gap: rfSpacing['8x'],
    justifyContent: 'center',
  },
  tab: {
    paddingVertical: rfSpacing['8x'],
    paddingHorizontal: rfSpacing['12x'],
    borderRadius: rfSpacing['12x'],
    backgroundColor: color.F_White,
    flex: 1,
    alignItems: 'center',
  },
  activeTab: {
    borderColor: color.F_OnBoard,
    borderWidth: rfSpacing['1.5x'],
    backgroundColor: color.F_ActiveTab,
  },
  tabText: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['16x'],
    color: color.F_OnBoard,
    fontWeight: '500',
  },
  tabTextActive: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['16x'],
    color: color.F_OnBoard,
    fontWeight: '600',
  },
  scrollContent: {
    paddingBottom: rfSpacing['20x'],
  },
  card: {
    backgroundColor: color.F_White,
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
    backgroundColor: color.F_White,
    borderRadius: rfSpacing['13x'],
    marginHorizontal: rfSpacing['18x'],
    marginTop: rfSpacing['18x'],
    paddingVertical: rfSpacing['15x'],
    paddingHorizontal: rfSpacing['13x'],
    borderRadius: rfSpacing['15x'],
  },
  tipsHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rfSpacing['4x'],
    left: rfSpacing['1x'],
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
    left: rfSpacing['4x'],
  },
  tipBullet: {
    fontSize: rfSpacing['17x'],
    color: color.F_OnBoard,
    marginRight: rfSpacing['7x'],
    marginTop: rfSpacing['2x'],
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
    borderWidth: rfSpacing['2x'],
    gap: rfSpacing['10x'],
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
    backgroundColor: color.F_White,
    borderRadius: rfSpacing['10x'],
    marginBottom: rfSpacing['12x'],
    padding: rfSpacing['12x'],
    borderColor: color.F_StepCard,
    borderWidth: rfSpacing['1x'],
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
    color: color.F_Black,
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
    fontSize: rfSpacing['13x'],
    color: color.F_StepDescription,
    marginLeft: rfSpacing['2x'],
    marginTop: rfSpacing['1x'],
  },
  historyCard: {
    backgroundColor: color.F_White,
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
    color: color.F_StepDescription,
    fontWeight: '600',
    textAlign: 'center',
  },
});
