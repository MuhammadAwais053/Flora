import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Let's make things bloom!</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'
  },
  text:{
    fontFamily:'Adamina-Regular',
    fontSize:16,
    fontWeight:'400',
    color:'#2C513F',
    top:'3%'
  }
})