import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import rfSpacing from '../../src/Theme/rfSpacing';
import color from '../../src/Theme/color';
import {launchCamera} from 'react-native-image-picker';

const openCamera = () => {
  launchCamera({mediaType: 'photo'}, response => {
    console.log(response);
  });
};

const AddPlant = () => {
  const navigation = useNavigation();
  const [plantName, setPlantName] = useState('');
  const [nickname, setNickname] = useState('');
  const [location, setLocation] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [notes, setNotes] = useState('');
  const locations = [
    'Living Room',
    'Bedroom',
    'Balcony',
    'Garden',
    'Kitchen',
    'Bathroom',
    'Office',
    'Study Room',
    'Dining Room',
    'Hallway',
    'Front Porch',
    'Backyard',
    'Terrace',
    'Greenhouse',
    'Window Sill',
    'Patio',
    'Sunroom',
    'Reception Area',
    'Library',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: rfSpacing['20x'],
          }}>
          <View style={styles.container}>
            <View style={{flexDirection: 'row', top: '2%'}}>
              <Pressable onPress={() => navigation.navigate('Main')}>
                <Image
                  style={{width: rfSpacing['30x'], height: rfSpacing['30x']}}
                  source={require('../pic/Pre.png')}
                />
              </Pressable>
              <Image
                style={{
                  width: rfSpacing['33x'],
                  height: rfSpacing['33x'],
                  tintColor: 'black',
                }}
                source={require('../pic/logo.png')}
              />
              <Text
                style={{
                  fontFamily: 'Alkalami-Regular',
                  fontSize: rfSpacing['24x'],
                  color: 'black',
                  bottom: '1.4%',
                  left: '2.3%',
                  fontWeight: '400',
                }}>
                Flora
              </Text>
            </View>

            <View style={{alignSelf: 'center'}}>
              <Text
                style={{
                  fontFamily: 'AbhayaLibre-ExtraBold',
                  fontSize: rfSpacing['34x'],
                  fontWeight: '400',
                  color: 'black',
                }}>
                Add New Plant
              </Text>
            </View>

            <Text
              style={{
                fontFamily: 'AbhayaLibre-ExtraBold',
                fontWeight: '600',
                fontSize: rfSpacing['22x'],
                color: '#344E41',
              }}>
              Plant Identification
            </Text>

            <Text
              style={{
                fontFamily: 'Adamina-Regular',
                fontSize: rfSpacing['15x'],
                fontWeight: '500',
                lineHeight: rfSpacing['24x'],
                color: 'black',
              }}>
              Enter the plant name or take a photo
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignContent: 'space-between',
                gap: rfSpacing['40x'],
                top: '5%',
                left: '1%',
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

            <View style={{flexDirection: 'column', top: '5%'}}>
              <Text style={styles.label}>Plant name</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g Alovera Plant"
                placeholderTextColor={'#A9A9A9'}
                value={plantName}
                onChangeText={setPlantName}
              />
            </View>

            <View style={{flexDirection: 'column', top: '6%'}}>
              <Text
                style={{
                  fontSize: rfSpacing['18x'],
                  color: color.F_Black,
                  fontFamily: 'Adamina-Regular',
                  fontWeight: '400',
                  top: '1%',
                }}>
                Plant Details:
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Give it a nickname"
                placeholderTextColor={'#A9A9A9'}
              />
            </View>

            <View style={{flexDirection: 'column', top: '6%'}}>
              <Text style={styles.label}>Location</Text>

              {/* Dropdown Trigger */}
              <TouchableOpacity
                style={styles.input}
                onPress={() => setShowDropdown(prev => !prev)}>
                <Text style={{color: location ? color.F_Black : '#A9A9A9'}}>
                  {location || 'Where is your plant located?'}
                </Text>
                <Image
                  source={require('../pic/down.png')}
                  style={{
                    width: rfSpacing['30x'],
                    height: rfSpacing['30x'],
                    position: 'absolute',
                    right: 10,
                    tintColor: color.F_InputContainer,
                  }}
                />
              </TouchableOpacity>

              {/* Dropdown Menu */}
              {showDropdown && (
                <View style={styles.dropdownContainer}>
                  <FlatList
                    data={locations}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        style={styles.dropdownItem}
                        onPress={() => {
                          setLocation(item);
                          setShowDropdown(false);
                        }}>
                        <Text style={{color: color.F_Black}}>{item}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              )}
            </View>
            <View
              style={{
                marginTop: '15%',
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
                    maxHeight: '500%',
                    textAlignVertical: 'top',
                    color: color.F_Black,
                  }}
                  placeholder="Add any special care notes or observations"
                  placeholderTextColor={color.F_LightText}
                />
              </View>
            </View>
            <Pressable
              style={styles.button}
              onPress={() => {
                navigation.navigate('Plant Added', {plantName});
              }}>
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
  },
  text: {
    fontFamily: 'Adamina-Regular',
    fontWeight: '400',
    fontSize: rfSpacing['15x'],
    color: 'black',
  },
  label: {
    fontSize: rfSpacing['13x'],
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
    maxHeight: rfSpacing['150x'],
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
    width: rfSpacing['328x'],
    height: rfSpacing['48x'],
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: rfSpacing['8x'],
    top: '5%',
  },
});
