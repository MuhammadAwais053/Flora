import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            style={{ marginTop: '2%', width:40,height:40 }}
            source={require('../pic/Pre.png')}
          />
        </Pressable>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Create Account</Text>
        <Text style={styles.text2}>
          Sign up to get personalized plant recommendations and care tips
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={styles.label}>Full Name</Text>
        <View style={styles.inputContainer}>
          <Image
            source={require('../pic/user.png')}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            placeholderTextColor="#7C7C7C"
            value={name}
            onChangeText={setName}
          />
        </View>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <Image
            source={require('../pic/mail.png')}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#7C7C7C"
            value={email}
            onChangeText={setEmail}
          />
        </View>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
          <Image
            source={require('../pic/forgot.png')}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#7C7C7C"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={styles.label}>Confirm Password</Text>
        <View style={styles.inputContainer}>
          <Image
            source={require('../pic/forgot.png')}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Re-enter your password"
            placeholderTextColor="#7C7C7C"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>

      
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '5%',
  },
  text: {
    fontSize: 24,
    fontFamily: 'Adamina-Regular',
    color: 'black',
    marginTop: '8%',
    fontWeight: '400',
  },
  text2: {
    fontFamily: 'Adamina-Regular',
    fontSize: 19,
    color: '#7C7C7C',
    textAlign: 'left',
    letterSpacing: 0.7,
    marginTop: '5%',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#7C7C7C',
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: 'black',
  },
  loginBtn: {
    flexDirection: 'row',
    backgroundColor: '#628A73',
    marginTop: 30,
    paddingVertical: 15,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
});
