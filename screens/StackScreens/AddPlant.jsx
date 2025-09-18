import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import rfSpacing from '../../src/Theme/rfSpacing';
import color from '../../src/Theme/color';
import {launchCamera} from 'react-native-image-picker';
import {PlantContext} from '../PlantContext';
import DropDownPicker from 'react-native-dropdown-picker';

const AddPlant = () => {
  const navigation = useNavigation();
  const {addPlant} = useContext(PlantContext);
  const [plantName, setPlantName] = useState('');
  const [nickname, setNickname] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [imageUri, setImageUri] = useState('');
  const locations = ['Living Room', 'Bedroom', 'Balcony', 'Garden', 'Kitchen'];

  const [openLocation, setOpenLocation] = useState(false);
  const [itemsLocation, setItemsLocation] = useState(
    locations.map(l => ({label: l, value: l})),
  );

  const openCamera = () => {
    launchCamera({mediaType: 'photo'}, response => {
      if (
        response &&
        response.assets &&
        response.assets.length > 0 &&
        response.assets[0].uri
      ) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  const handleAddPlant = () => {
    if (!plantName || !location) {
      alert('Please enter plant name and select location!');
      return;
    }
    addPlant({plantName, nickname, location, notes, imageUri});
    navigation.navigate('Plant Added', {plantName});
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <KeyboardAvoidingView style={{flex: 1}}>
        <ScrollView contentContainerStyle={styles.scrollViewCont}>
          <View style={styles.container}>
            <View style={styles.logoCont}>
              <Pressable onPress={() => navigation.navigate('Main')}>
                <Image
                  style={styles.arrow}
                  source={require('../pic/Pre.png')}
                />
              </Pressable>
              <Image style={styles.logo} source={require('../pic/logo.png')} />
              <Text style={styles.logotext}>Flora</Text>
            </View>

            <View style={{alignSelf: 'center'}}>
              <Text style={styles.headingtext}>Add New Plant</Text>
            </View>

            <Text style={styles.subHeading}>Plant Identification</Text>

            <Text style={styles.destext}>
              Enter the plant name or take a photo
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignContent: 'space-between',
                gap: rfSpacing['40x'],
                top: rfSpacing['15x'],
              }}>
              <View
                style={{
                  width: rfSpacing['130x'],
                  height: rfSpacing['37x'],
                  backgroundColor: color.F_OnBoard,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: rfSpacing['10x'],
                }}>
                <Pressable
                  onPress={() => {
                    navigation.navigate('Add Plant');
                  }}>
                  <Text style={styles.text}>Manual</Text>
                </Pressable>
              </View>
              <View
                style={{
                  width: rfSpacing['130x'],
                  height: rfSpacing['37x'],
                  backgroundColor: color.F_White,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: rfSpacing['10x'],
                }}>
                <Pressable onPress={openCamera}>
                  <Text style={styles.text}>Take Photo</Text>
                </Pressable>
              </View>
            </View>

            {imageUri ? (
              <View
                style={{
                  alignItems: 'center',
                  marginTop: rfSpacing['10x'],
                  top: rfSpacing['10x'],
                }}>
                <Image
                  source={{uri: imageUri}}
                  style={{width: 110, height: 110, borderRadius: 20}}
                />
              </View>
            ) : null}

            <View style={{flexDirection: 'column', top: rfSpacing['15x']}}>
              <Text style={styles.label}>Plant name</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g Alovera Plant"
                placeholderTextColor={'#A9A9A9'}
                value={plantName}
                onChangeText={setPlantName}
              />
            </View>

            <View style={{flexDirection: 'column', top: rfSpacing['18x']}}>
              <Text
                style={{
                  fontSize: rfSpacing['15x'],
                  color: color.F_Black,
                  fontFamily: 'Adamina-Regular',
                  fontWeight: '400',
                  top: rfSpacing['5x'],
                }}>
                Plant Details:
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Give it a nickname"
                placeholderTextColor={'#A9A9A9'}
                value={nickname}
                onChangeText={setNickname}
              />
            </View>

            <View
              style={{
                flexDirection: 'column',
                top: rfSpacing['18x'],
                zIndex: 9000,
              }}>
              <Text style={styles.label}>Location</Text>

              <View style={{zIndex: 9000}}>
                <DropDownPicker
                  placeholder="Where is your plant located?"
                  open={openLocation}
                  value={location}
                  items={itemsLocation}
                  setOpen={setOpenLocation}
                  setValue={setLocation}
                  setItems={setItemsLocation}
                  style={styles.input}
                  dropDownContainerStyle={styles.dropdownContainer}
                  zIndex={9000}
                  listMode="SCROLLVIEW"
                  scrollViewProps={{nestedScrollEnabled: true}}
                />
              </View>
            </View>
            <View
              style={{
                marginTop: rfSpacing['40x'],
              }}>
              <Text
                style={{
                  fontSize: rfSpacing['15x'],
                  fontFamily: 'Adamina-Regular',
                  color: color.F_Black,
                  fontWeight: '400',
                }}>
                Notes (Optional)
              </Text>
              <View>
                <TextInput
                  multiline
                  numberOfLines={6}
                  style={{
                    marginTop: rfSpacing['3x'],
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: rfSpacing['10x'],
                    padding: rfSpacing['10x'],
                    backgroundColor: color.F_White,
                    maxHeight: rfSpacing['500x'],
                    textAlignVertical: 'top',
                    color: color.F_Black,
                  }}
                  placeholder="Add any special care notes or observations"
                  placeholderTextColor={color.F_LightText}
                  value={notes}
                  onChangeText={setNotes}
                />
              </View>
            </View>
            <Pressable style={styles.button} onPress={handleAddPlant}>
              <Text style={styles.buttonText}>Add Plant</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddPlant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.F_Main,
    paddingHorizontal: rfSpacing['15x'],
    paddingTop: StatusBar.currentHeight,
  },
  scrollViewCont: {
    flexGrow: 1,
    paddingBottom: rfSpacing['50x'],
  },
  logoCont: {
    flexDirection: 'row',
    top: rfSpacing['5x'],
  },
  arrow: {
    width: rfSpacing['30x'],
    height: rfSpacing['30x'],
  },
  logo: {
    width: rfSpacing['33x'],
    height: rfSpacing['33x'],
    tintColor: 'black',
  },
  logotext: {
    fontFamily: 'Alkalami-Regular',
    fontSize: rfSpacing['24x'],
    color: 'black',
    bottom: rfSpacing['5x'],
    left: rfSpacing['10x'],
    fontWeight: '400',
  },
  headingtext: {
    fontFamily: 'AbhayaLibre-ExtraBold',
    fontSize: rfSpacing['34x'],
    fontWeight: '400',
    color: 'black',
  },
  subHeading: {
    fontFamily: 'AbhayaLibre-ExtraBold',
    fontWeight: '600',
    fontSize: rfSpacing['22x'],
    color: '#344E41',
  },
  destext: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['15x'],
    fontWeight: '500',
    lineHeight: rfSpacing['24x'],
    color: 'black',
  },
  text: {
    fontFamily: 'Adamina-Regular',
    fontWeight: '400',
    fontSize: rfSpacing['15x'],
    color: 'black',
  },
  label: {
    fontSize: rfSpacing['15x'],
    color: color.F_Black,
    fontFamily: 'Adamina-Regular',
    fontWeight: '400',
    lineHeight: rfSpacing['24x'],
  },
  input: {
    marginTop: rfSpacing['3x'],
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: rfSpacing['10x'],
    padding: rfSpacing['10x'],
    backgroundColor: color.F_White,
    color: color.F_Black,
  },
  dropdownContainer: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: rfSpacing['8x'],
    backgroundColor: color.F_White,
  },
  dropdownItem: {
    padding: rfSpacing['10x'],
    borderBottomWidth: 0.3,
    borderBottomColor: '#ccc',
  },
  buttonText: {
    fontSize: rfSpacing['20x'],
    fontWeight: 'bold',
    letterSpacing: 1,
    color: color.F_White,
  },
  button: {
    backgroundColor: '#628A73',
    height: rfSpacing['48x'],
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: rfSpacing['12x'],
    top: rfSpacing['15x'],
  },
  modalOverlay: {
    flex: 1,
  },
});
