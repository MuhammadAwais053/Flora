import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import React, {useContext} from 'react';
import rfSpacing from '../../src/Theme/rfSpacing';
import color from '../../src/Theme/color';
import {useNavigation} from '@react-navigation/native';
import {PlantContext} from '../PlantContext';

const MyGarden = () => {
  const navigation = useNavigation();
  const {plants} = useContext(PlantContext);

  const renderItem = ({item, index}) => (
    <View style={styles.card}>
      <Image
        source={
          item.imageUri ? {uri: item.imageUri} : require('../pic/image.png')
        }
        style={styles.plantImage}
        resizeMode="cover"
      />
      <View style={styles.details}>
        <Text style={styles.plantName}>{item.plantName}</Text>
        <Text style={styles.plantType}>
          {item.nickname || 'Flowering plant'}
        </Text>
        <View style={styles.divider} />
        <Pressable style={styles.reminderRow}>
          <Image source={require('../pic/bell.png')} style={styles.bellIcon} />
          <Text style={styles.reminderText}>Add Reminder</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('Care Schedule', {
              selectedPlant: item,
              plantIndex: index,
            });
          }}
          style={styles.reminderRow}>
          <Image
            source={require('../pic/calendar.png')}
            style={{
              width: rfSpacing['22x'],
              height: rfSpacing['22x'],
              marginRight: rfSpacing['8x'],
            }}
          />
          <Text style={styles.reminderText}>Schedule Care</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={styles.cont}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={color.F_OnBoard}
      />
      <View style={styles.topcont}>
        <View
          style={{
            flexDirection: 'row',
            top: rfSpacing['9x'],
          }}>
          <Pressable
            onPress={() => navigation.navigate('Main', {screen: 'Home'})}>
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
          <Text style={styles.Gardentext}>My Garden</Text>
        </View>
      </View>
      <View style={{marginBottom: rfSpacing['264x']}}>
        <FlatList
          data={plants}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={{padding: rfSpacing['12x']}}
          ListEmptyComponent={
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                gap: rfSpacing['10x'],
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: rfSpacing['37x'],
                  fontSize: rfSpacing['20x'],
                  color: color.F_Black,
                }}>
                No plants added yet.
              </Text>
            </View>
          }
        />
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Add Plant');
            }}>
            <Text
              style={{
                fontSize: rfSpacing['15x'],
                color: color.F_OnBoard,
                fontFamily: 'Adamina-Regular',
                fontWeight: 'bold',
              }}>
              Tap here to add plant
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MyGarden;

const styles = StyleSheet.create({
  cont: {
    backgroundColor: color.F_Main,
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  topcont: {
    flexDirection: 'column',
    height: rfSpacing['120x'],
    backgroundColor: '#628A73',
  },
  Gardentext: {
    fontFamily: 'AbrilFatface-Regular',
    fontSize: rfSpacing['38x'],
    verticalAlign: 'middle',
    fontWeight: '400',
    color: color.F_White,
    letterSpacing: rfSpacing['0.7x'],
  },
  card: {
    flexDirection: 'row',
    backgroundColor: color.F_White,
    borderRadius: rfSpacing['20x'],
    padding: rfSpacing['12x'],
    alignItems: 'center',
    marginBottom: rfSpacing['12x'],
  },
  plantImage: {
    width: rfSpacing['97x'],
    height: rfSpacing['120x'],
    borderRadius: rfSpacing['20x'],
    backgroundColor: color.F_LightText,
    right: rfSpacing['8x'],
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  plantName: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['22x'],
    fontWeight: '600',
    color: color.F_Black,
  },
  plantType: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['18x'],
    color: color.F_OnBoard,
    fontWeight: '400',
    top: rfSpacing['2x'],
  },
  divider: {
    borderBottomColor: color.F_Divider,
    borderBottomWidth: rfSpacing['2x'],
    marginVertical: rfSpacing['10x'],
  },
  reminderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: rfSpacing['1x'],
  },
  bellIcon: {
    width: rfSpacing['22x'],
    height: rfSpacing['22x'],
    tintColor: '#F7DC6F',
    marginRight: rfSpacing['8x'],
  },
  reminderText: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['18x'],
    color: color.F_OnBoard,
    fontWeight: '400',
  },
});
