import React from 'react';
import { View, Text, Button } from 'react-native';
import HeaderWithIcon from './HeaderWithIcon';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1,backgroundColor:'#305773' }}>
      <HeaderWithIcon />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:40,fontFamily:'Allura-Regular'}}>Profile Screen</Text>
        {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}
      </View>
    </View>
  );
}
