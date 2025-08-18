import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export default function HeaderWithIcon() {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828859.png', 
          }}
          style={{ width: 28, height: 28 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    paddingHorizontal: 15,
    justifyContent: 'center',
    backgroundColor: '#263b47',
  },
});
