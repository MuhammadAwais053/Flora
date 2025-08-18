import React from 'react';
import { View, Text, Button } from 'react-native';
import HeaderWithIcon from './HeaderWithIcon';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1,backgroundColor:'#305773' }}>
      <HeaderWithIcon />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:40,fontFamily:'Allura-Regular'}}>Home Screen</Text>
        {/* <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} /> */}
      </View>
    </View>
  );
}
