import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import rfSpacing from '../../src/Theme/rfSpacing';
import color from '../../src/Theme/color';

const plantTips = [
  {
    id: '1',
    image: '🌟',
    title: 'Tip of the Day',
    description:
      'Most plant problems come from overwatering. When in doubt, wait another day before watering!',
  },
  {
    id: '2',
    image: '💧',
    title: 'Check Soil Before Watering',
    description:
      'Put your finger 2 inches into the soil. If it’s dry, water your plant. If it’s wet, wait a few days.',
  },
  {
    id: '3',
    image: '🌞',
    title: 'Plants Love Morning Sun',
    description:
      'Place your plants near east-facing windows. Morning light is gentle and perfect for most plants.',
  },
  {
    id: '4',
    image: '🌱',
    title: "Don't Over-Fertilize",
    description:
      'Use fertilizer once a month in spring and summer. Less is better than too much.',
  },
  {
    id: '5',
    image: '🏠',
    title: 'Keep New Plants Separate',
    description:
      'When you buy a new plant, keep it away from other plants for 2 weeks to check for bugs.',
  },
  {
    id: '6',
    image: '🔄',
    title: 'Rotate Your Plants',
    description:
      'Turn your plants a little bit each week so all sides get equal sunlight.',
  },
  {
    id: '7',
    image: '🧽',
    title: 'Clean the Leaves',
    description:
      'Wipe plant leaves with a damp cloth once a month to help them breathe better.',
  },
];

const Card = ({tip}) => (
  <View style={styles.card}>
    <View style={styles.cardRow}>
      <Text style={styles.cardIcon}>{tip.image}</Text>
      <Text style={styles.cardTitle}>{tip.title}</Text>
    </View>
    <Text style={styles.cardDesc}>{tip.description}</Text>
  </View>
);

const ExpertTips = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainCont}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={color.F_OnBoard}
      />
      <View style={styles.TopCont}>
        <View style={{flexDirection: 'row', top: rfSpacing['6x']}}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              style={styles.BackArrow}
              source={require('../pic/Pre.png')}
            />
          </Pressable>
          <Image style={styles.logo} source={require('../pic/logo.png')} />
          <Text style={styles.logoText}>Flora</Text>
        </View>
        <Text
          style={{
            fontFamily: 'Adamina-Regular',
            fontSize: 24,
            left: '3%',
            fontWeight: '400',
            color: '#FFFBFB',
            letterSpacing: rfSpacing['0.7x'],
          }}>
          Expert Tips
        </Text>
      </View>
      <FlatList
        data={plantTips}
        renderItem={({item}) => <Card tip={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default ExpertTips;

const styles = StyleSheet.create({
  mainCont: {
    backgroundColor: color.F_Main,
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  TopCont: {
    flexDirection: 'column',
    width: 'auto',
    height: rfSpacing['120x'],
    backgroundColor: color.F_OnBoard,
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
    bottom: rfSpacing['4x'],
    left: rfSpacing['4x'],
    fontWeight: '400',
  },
  listContainer: {
    padding: rfSpacing['6x'],
    paddingTop: rfSpacing['6x'],
  },
  card: {
    backgroundColor: color.F_White,
    borderRadius: rfSpacing['20x'],
    marginBottom: rfSpacing['6x'],
    padding: rfSpacing['12x'],
    borderColor: color.F_OnBoard,
    borderWidth: rfSpacing['1x'],
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rfSpacing['6x'],
  },
  cardIcon: {
    fontSize: rfSpacing['22x'],
    marginRight: rfSpacing['10x'],
  },
  cardTitle: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['17x'],
    color: color.F_Black,
    fontWeight: '400',
  },
  cardDesc: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['11x'],
    color: color.F_Black,
    marginLeft: rfSpacing['2x'],
    marginTop: rfSpacing['1x'],
    lineHeight: rfSpacing['20x'],
    fontWeight: '500',
    verticalAlign: 'middle',
  },
});
