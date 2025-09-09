import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import rfSpacing from '../../src/Theme/rfSpacing';
import color from '../../src/Theme/color';
import {useNavigation} from '@react-navigation/native';
import {PlantContext} from '../PlantContext';

const renderItem = ({item}) => (
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
      <Text style={styles.plantType}>{item.nickname || 'Flowering plant'}</Text>
      <View style={styles.divider} />
      <Pressable style={styles.reminderRow}>
        <Image source={require('../pic/bell.png')} style={styles.bellIcon} />
        <Text style={styles.reminderText}>Add Reminder</Text>
      </Pressable>
    </View>
  </View>
);

const MyGarden = () => {
  const navigation = useNavigation();
  const {plants} = useContext(PlantContext);

  return (
    <View style={styles.cont}>
      <View style={styles.topcont}>
        <View style={{flexDirection: 'row', gap: 2}}>
          <Pressable
            onPress={() => navigation.navigate('Main', {screen: 'Home'})}>
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
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text style={styles.Gardentext}>My Garden</Text>
        </View>
      </View>
      <View>
        <FlatList
          data={plants}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={{padding: rfSpacing['12x']}}
          ListEmptyComponent={
            <Text
              style={{
                textAlign: 'center',
                marginTop: rfSpacing['40x'],
                color: color.F_Black,
              }}>
              No plants added yet.
            </Text>
          }
        />
      </View>
    </View>
  );
};

export default MyGarden;

const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#E1EBC7',
    flex: 1,
  },
  topcont: {
    flexDirection: 'column',
    height: 120,
    backgroundColor: '#628A73',
  },
  Gardentext: {
    fontFamily: 'AbrilFatface-Regular',
    fontSize: 38,
    verticalAlign: 'middle',
    fontWeight: '400',
    color: color.F_White,
    letterSpacing: rfSpacing['0.7x'],
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: rfSpacing['12x'],
    alignItems: 'center',
    marginBottom: rfSpacing['12x'],
  },
  plantImage: {
    width: 97,
    height: 120,
    borderRadius: 20,
    backgroundColor: '#f4f4f4',
    right: '5%',
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  plantName: {
    fontFamily: 'Adamina-Regular',
    fontSize: 22,
    fontWeight: '600',
    color: color.F_Black,
  },
  plantType: {
    fontFamily: 'Adamina-Regular',
    fontSize: 18,
    color: '#9EC696',
    fontWeight: '400',
    top: '1.2%',
  },
  divider: {
    borderBottomColor: '#ACA6A6',
    borderBottomWidth: 1.5,
    marginVertical: rfSpacing['10x'],
    width: '90%',
  },
  reminderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '1%',
  },
  bellIcon: {
    width: 22,
    height: 22,
    tintColor: '#7C7C7C',
    marginRight: rfSpacing['8x'],
  },
  reminderText: {
    fontFamily: 'Adamina-Regular',
    fontSize: 18,
    color: '#90B386',
    fontWeight: '400',
  },
});
