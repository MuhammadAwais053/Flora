import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Alert,
  ScrollView,
} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getAuth, signOut} from '@react-native-firebase/auth';
import rfSpacing from '../../src/Theme/rfSpacing';
import color from '../../src/Theme/color';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const authInstance = getAuth();
  const user = authInstance.currentUser;

  const handleLogout = async () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: async () => {
          try {
            await signOut(authInstance);
            await AsyncStorage.removeItem('isLoggedIn');
          } catch (error) {
            console.error('Logout error:', error);
            Alert.alert('Error', 'Failed to logout. Please try again.');
          }
        },
      },
    ]);
  };

  return (
    <View style={styles.cont}>
      <StatusBar
        translucent={true}
        barStyle={'light-content'}
        backgroundColor={color.F_OnBoard}
      />
      <View style={styles.topcont}>
        <View style={{flexDirection: 'row', top: rfSpacing['9x']}}>
          <Pressable
            onPress={() => navigation.navigate('Main', {screen: 'Home'})}>
            <Image style={styles.iconBack} source={require('../pic/Pre.png')} />
          </Pressable>
          <Image style={styles.iconLogo} source={require('../pic/logo.png')} />
          <Text style={styles.logoText}>Flora</Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <Text style={styles.Gardentext}>
            {user?.displayName || 'Guest User'}
          </Text>
          <Text style={styles.emailText}>{user?.email}</Text>
        </View>
        <View style={styles.centered}></View>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'flex-end',
          paddingBottom: rfSpacing['18x'],
        }}>
        <View style={styles.contentContainer}>
          <Pressable style={styles.logoutButton} onPress={handleLogout}>
            <Image
              style={styles.logoutIcon}
              source={require('../pic/user.png')}
            />
            <Text style={styles.logoutText}>Logout</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  cont: {
    backgroundColor: color.F_Main,
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  topcont: {
    flexDirection: 'column',
    backgroundColor: color.F_OnBoard,
    justifyContent: 'flex-start',
    bottom: rfSpacing['12x'],
  },
  iconBack: {
    width: rfSpacing['30x'],
    height: rfSpacing['30x'],
    tintColor: color.F_White,
  },
  iconLogo: {
    width: rfSpacing['33x'],
    height: rfSpacing['33x'],
    tintColor: color.F_White,
  },
  logoText: {
    fontFamily: 'Alkalami-Regular',
    fontSize: rfSpacing['24x'],
    color: color.F_White,
    fontWeight: '400',
    marginLeft: rfSpacing['6x'],
    bottom: rfSpacing['3x'],
  },
  centered: {
    alignItems: 'center',
  },
  Gardentext: {
    fontFamily: 'AbrilFatface-Regular',
    fontSize: rfSpacing['32x'],
    verticalAlign: 'middle',
    fontWeight: '500',
    color: color.F_White,
    letterSpacing: rfSpacing['0.7x'],
  },
  emailText: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['14x'],
    color: color.F_White,
    marginTop: rfSpacing['4x'],
    opacity: 0.9,
  },
  contentContainer: {
    flex: 1,
    padding: rfSpacing['20x'],
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.F_White,
    padding: rfSpacing['16x'],
    borderRadius: rfSpacing['12x'],
    marginTop: rfSpacing['20x'],
  },
  logoutIcon: {
    width: rfSpacing['24x'],
    height: rfSpacing['24x'],
    tintColor: color.F_OnBoard,
    marginRight: rfSpacing['12x'],
  },
  logoutText: {
    fontFamily: 'Adamina-Regular',
    fontSize: rfSpacing['16x'],
    color: color.F_OnBoard,
    fontWeight: '600',
  },
});
