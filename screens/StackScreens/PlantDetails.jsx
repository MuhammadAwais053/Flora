import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Pressable,
} from 'react-native';
import React, {useContext} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import rfSpacing from '../../src/Theme/rfSpacing';
import color from '../../src/Theme/color';
import {PlantContext} from '../PlantContext';
import LinearGradient from 'react-native-linear-gradient';

const PlantDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {plantIndex} = route.params;
  const {plants, careSchedules} = useContext(PlantContext);

  const plant = plants[plantIndex];
  const schedules = careSchedules.filter(s => s.plantIndex === plantIndex);

  return (
    <LinearGradient
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}
      colors={[color.F_OnBoard, color.F_Main]}
      style={{flex: 1}}>
      <ScrollView style={styles.cont}>
        <StatusBar
          translucent={true}
          barStyle={'light-content'}
          backgroundColor={color.F_OnBoard}
        />
        <View style={styles.topcont}>
          <View
            style={{
              flexDirection: 'row',
              top: rfSpacing['9x'],
            }}>
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                style={{
                  width: rfSpacing['30x'],
                  height: rfSpacing['30x'],
                  tintColor: color.F_White,
                }}
                source={require('../pic/Pre.png')}
              />
            </Pressable>
            <Image
              style={{
                width: rfSpacing['33x'],
                height: rfSpacing['33x'],
                tintColor: color.F_White,
              }}
              source={require('../pic/logo.png')}
            />
            <Text
              style={{
                fontFamily: 'Alkalami-Regular',
                fontSize: rfSpacing['24x'],
                color: color.F_White,
                bottom: rfSpacing['3x'],
                left: rfSpacing['6x'],
                fontWeight: '400',
              }}>
              Flora
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Text style={styles.title}>Plant Details</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Image
            source={
              plant.imageUri
                ? {uri: plant.imageUri}
                : require('../pic/image.png')
            }
            style={styles.plantImage}
            resizeMode="cover"
          />
          <Text style={styles.plantName}>{plant.plantName}</Text>
          <Text style={styles.nickname}>
            {plant.nickname || 'No nickname provided'}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Location</Text>
          <Text style={styles.value}>{plant.location}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Notes</Text>
          <Text style={styles.value}>
            {plant.notes && plant.notes.trim() !== ''
              ? plant.notes
              : 'No notes yet'}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Care Schedule</Text>
          {schedules.length > 0 ? (
            schedules.map((sch, index) => (
              <View key={index} style={styles.scheduleCard}>
                <Text style={styles.scheduleText}>Type: {sch.careType}</Text>
                <Text style={styles.scheduleText}>
                  Date: {new Date(sch.scheduledDate).toLocaleDateString()}
                </Text>
                <Text style={styles.scheduleText}>
                  Time: {new Date(sch.scheduledDate).toLocaleTimeString()}
                </Text>
                <Text style={styles.scheduleText}>
                  Repeat: {sch.repeatFrequency}
                </Text>
                {sch.notes ? (
                  <Text style={styles.scheduleText}>Notes: {sch.notes}</Text>
                ) : null}
              </View>
            ))
          ) : (
            <Text style={styles.value}>No care schedules yet</Text>
          )}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default PlantDetails;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    // backgroundColor: color.F_Main,
    paddingTop: StatusBar.currentHeight,
  },
  topcont: {
    flexDirection: 'column',
    height: rfSpacing['120x'],
    backgroundColor: '#628A73',
  },
  title: {
    fontFamily: 'AbrilFatface-Regular',
    fontSize: rfSpacing['32x'],
    fontWeight: '400',
    color: color.F_White,
    letterSpacing: rfSpacing['0.7x'],
  },
  section: {
    marginTop: rfSpacing['20x'],
    paddingHorizontal: rfSpacing['16x'],
  },
  plantImage: {
    width: rfSpacing['150x'],
    height: rfSpacing['180x'],
    borderRadius: rfSpacing['20x'],
    backgroundColor: color.F_LightText,
    alignSelf: 'center',
    marginBottom: rfSpacing['12x'],
  },
  plantName: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['24x'],
    fontWeight: '600',
    color: color.F_Black,
    textAlign: 'center',
  },
  nickname: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['18x'],
    color: color.F_OnBoard,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: rfSpacing['4x'],
  },
  label: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['18x'],
    fontWeight: '600',
    color: color.F_Black,
    marginBottom: rfSpacing['6x'],
  },
  value: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['16x'],
    color: color.F_Black,
  },
  scheduleCard: {
    backgroundColor: color.F_White,
    padding: rfSpacing['12x'],
    borderRadius: rfSpacing['12x'],
    marginBottom: rfSpacing['10x'],
    elevation: 2,
  },
  scheduleText: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['15x'],
    color: color.F_Black,
    marginBottom: rfSpacing['4x'],
  },
});
