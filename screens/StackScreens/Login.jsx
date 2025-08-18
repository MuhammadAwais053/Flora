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

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Image
            style={{ marginTop: '2%' }}
            source={require('../pic/backArrow.png')}
          />
        </Pressable>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Login Here</Text>
        <Text style={styles.text2}>
          Log in to discover plant recommendations, expert care guides and more
        </Text>
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

      <Pressable>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </Pressable>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

    
    </SafeAreaView>
  );
};

export default Login;

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
  forgotText: {
    color: '#628A73',
    textAlign: 'right',
    marginTop: 10,
    fontWeight: '500',
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
