import React, {useContext, useState, useEffect} from 'react';
import {View, Text, Image, Pressable, Platform, StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import rfSpacing from '../../src/Theme/rfSpacing';
import color from '../../src/Theme/color';
import {PlantContext} from '../PlantContext';

const CareSchedule = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {plants} = useContext(PlantContext);
  const {selectedPlant, plantIndex} = route.params || {};

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(
    plantIndex !== undefined ? plantIndex : null,
  );
  const [items, setItems] = useState(
    plants.map((plant, index) => ({
      label: plant.plantName,
      value: index,
      icon: () => (
        <Image
          source={
            plant.imageUri ? {uri: plant.imageUri} : require('../pic/image.png')
          }
          style={{
            width: rfSpacing['30x'],
            height: rfSpacing['30x'],
            borderRadius: rfSpacing['5x'],
            marginRight: rfSpacing['8x'],
          }}
        />
      ),
    })),
  );
  const [selectedDate, setSelectedDate] = useState(null);
  const [pickerDate, setPickerDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (plantIndex !== undefined) {
      setValue(plantIndex);
    }
  }, [plantIndex]);

  const showDatePicker = () => {
    setMode('date');
    setShow(true);
  };

  const onChange = (event, selected) => {
    if (selected) {
      if (mode === 'date') {
        setPickerDate(selected);
        if (Platform.OS === 'android') {
          setMode('time');
          setShow(true);
        } else {
          setSelectedDate(selected);
          setShow(false);
        }
      } else {
        const updated = new Date(pickerDate);
        updated.setHours(selected.getHours());
        updated.setMinutes(selected.getMinutes());
        setPickerDate(updated);
        setSelectedDate(updated);
        setShow(false);
        setMode('date');
      }
    } else {
      setShow(false);
      setMode('date');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.headerRow}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={require('../pic/Pre.png')}
              style={styles.arrowIcon}
            />
          </Pressable>
          <Image source={require('../pic/logo.png')} style={styles.logoIcon} />
          <Text style={styles.logoText}>Flora</Text>
        </View>
        <Text style={styles.screenTitle}>Care Schedule</Text>
        <Text style={styles.screenSubtitle}>Keep your plants healthy</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Select Plant</Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Choose a plant"
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Select Care Date & Time</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>
            {selectedDate
              ? `${selectedDate.toLocaleDateString()} ${selectedDate.toLocaleTimeString()}`
              : 'No date and time selected'}
          </Text>
          <Pressable onPress={showDatePicker}>
            <Image
              source={require('../pic/calendar.png')}
              style={styles.calendarIcon}
            />
          </Pressable>
        </View>
        {show && (
          <DateTimePicker
            value={pickerDate}
            mode={mode}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={onChange}
          />
        )}
      </View>
    </View>
  );
};

export default CareSchedule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1EBC7',
  },
  topContainer: {
    flexDirection: 'column',
    height: rfSpacing['140x'],
    backgroundColor: color.F_OnBoard,
  },
  headerRow: {
    flexDirection: 'row',
    top: rfSpacing['6x'],
  },
  arrowIcon: {
    width: rfSpacing['30x'],
    height: rfSpacing['30x'],
    tintColor: color.F_White,
  },
  logoIcon: {
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
  screenTitle: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['20x'],
    fontWeight: '400',
    color: color.F_White,
    marginTop: rfSpacing['10x'],
    letterSpacing: rfSpacing['0.7x'],
  },
  screenSubtitle: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['16x'],
    fontWeight: '400',
    color: color.F_White,
    marginTop: rfSpacing['6x'],
  },
  section: {
    marginTop: rfSpacing['20x'],
    paddingHorizontal: rfSpacing['16x'],
  },
  label: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['16x'],
    marginBottom: rfSpacing['6x'],
    fontWeight: '400',
    color: color.F_Black,
  },
  dropdown: {
    borderColor: color.F_OnBoard,
    borderWidth: 1.5,
    borderRadius: 12,
  },
  dropdownContainer: {
    borderColor: '#A3A3A3',
    borderWidth: 1,
    borderRadius: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: color.F_OnBoard,
    borderWidth: 1.5,
    borderRadius: 12,
    padding: 12,
    backgroundColor: color.F_White,
  },
  dateText: {
    flex: 1,
    fontFamily: 'Adamina-Regular',
    fontSize: 15,
    color: color.F_Black,
  },
  calendarIcon: {
    width: 24,
    height: 24,
  },
});
